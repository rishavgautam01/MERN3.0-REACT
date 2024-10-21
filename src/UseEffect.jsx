import React, { useEffect,useState } from "react"
function UseEffect(){
    const [count,setCount] = useState(0)
    const[like,setLike] = useState(0)
    useEffect(()=>{
        console.log("Hello hello i am from useEffect")
    },[])
   useEffect(()=>{
    console.log("Hello World")
   },[count,like])

   useEffect(()=>{
    console.log("I always get executed")
   })
    

    return(
        <React.Fragment>
            <h1>Hello UseEffect bata ho hai ma</h1>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>+</button>
            <button onClick={()=>{
                setCount(count-1)
            }}>-</button>
            <h1>Like:{like} </h1>
            <button onClick={()=>{
                setLike(like+1)
            }}>Like me</button>
        </React.Fragment>
    )
}

export default UseEffect
