import { useState } from "react"
function UseState(){
    let [counter,setCounter] = useState(0)
    function increaseCount(){
        setCounter(counter+1)
    }
    function decreaseCount(){
        setCounter(counter-1)
    }

    return(
        <>
            <h1>{counter}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </>
    )
}


export default UseState;

