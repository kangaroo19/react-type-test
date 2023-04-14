import React from 'react';
import {useState,useEffect} from 'react';
import Avatar from './Avatar';
export interface IUser{
    name:string,
    image:string,
}
const {Kakao}:any=window //html 파일에서 cdn으로 받은 KaKao 변수,window에 저장됨

function LoginForm(){
    const [id,setId]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    const [user,setUser]=useState<IUser>({name:'',image:''})
    const REDIRECT_URI:string='http://localhost:3000'
    const REST_API_KEY = 'fed48f803783bd68db1d8f807678ec1c';
    useEffect(()=>{ 
        const initKakao=async () => {
            //카톡 로그인 사용 위한 초기화 과정
            Kakao.cleanup()
            Kakao.init('03b80192900abaf18948030a9ff57b0f')
            Kakao.isInitialized();
             //
            let params = new URL(document.location.toString()).searchParams;
            let code = params.get("code"); //승인코드
            if(code){
                const ACCESS_TOKEN = await requestToken(code) //requestToken의 리턴값은 엑세스토큰
                Kakao.Auth.setAccessToken(ACCESS_TOKEN) //엑세스토큰 값 할당
                const response=await Kakao.API.request({    //사용자 정보 요청
                    url:'/v2/user/me'
                })
                setUser({
                    name:response.properties.nickname,
                    image:response.properties.profile_image
                })
            }
        }
        initKakao();
    },[])

    const onChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        const { target: { name,value}} = event
        switch(name){
            case 'id':
                setId(value)
            break
            
            case 'password':
                setPassword(value)
            break
        }
    }
    const onSubmit=(event: React.FormEvent<HTMLFormElement>):void=>{ //로그인 버튼 클릭시 
        event.preventDefault()
        Kakao.Auth.authorize({ //간편 로그인 요청
            redirectUri: REDIRECT_URI,
          });
    }

    async function requestToken(AUTHORIZATION_CODE:string) { //엑세스 토큰발급위한 post 요청
        const response = await fetch("https://kauth.kakao.com/oauth/token", { //fetch 함수는 디폴트로 get 요청
            method: "POST",
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZATION_CODE}`
          });
          const data = await response.json();
          return data.access_token
      }
    return (
        <div>
            <form onSubmit={onSubmit}>
                ID:<input type="text" name="id" onChange={onChange}/>
                PW:<input type="text" name="password" onChange={onChange}/>
                <input type="submit" value='로그인'/>
            </form>
            <Avatar userObj={user}/>
        </div>
    )
}

export default LoginForm

