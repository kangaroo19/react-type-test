import React from 'react';
import {useState,useEffect} from 'react';
const {Kakao}:any=window //html 파일에서 cdn으로 받은 KaKao 변수,window에 저장됨
function LoginForm(){
    const [id,setId]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    const REDIRECT_URI:string='http://localhost:3000'

    useEffect(()=>{ //카톡 로그인 사용 위한 초기화 과정
        Kakao.cleanup()
        Kakao.init('03b80192900abaf18948030a9ff57b0f')
        Kakao.isInitialized(); 
        let params = new URL(document.location.toString()).searchParams;
        let code = params.get("code");
        console.log(code)
    },[])

    const onChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        const { target: { name,value}} = event
        if(name==='id') {setId(value)}
        else {setPassword(value)}
    }
    const onSubmit=(event: React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault()
        Kakao.Auth.authorize({
            redirectUri: REDIRECT_URI,
          });
          
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                ID:<input type="text" name="id" onChange={onChange}/>
                PW:<input type="text" name="password" onChange={onChange}/>
                <input type="submit" value='로그인'/>
            </form>
        </div>
    )
}

export default LoginForm

