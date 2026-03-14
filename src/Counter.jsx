import { useState } from "react"

export default function (){
     const [count , setCount] = useState(0);

    const handAdd = () => {
        console.log("Event click");
        const newCount = count + 1;
        setCount(newCount)
    }

    const CounterStyle = {
        border : '2px solid crimson'
    }
    return (
        <div style = {CounterStyle}>
            <h3>Counter: {count} </h3>
            <button onClick={handAdd}>ADD</button>
        </div>
    )
}