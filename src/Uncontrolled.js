import { useRef } from "react"

export const Uncontorolled=()=>{
    const inputRef=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(inputRef.current.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef}/>
            <button type="submit">제출</button>
        </form>
    )
}