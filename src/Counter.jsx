import React ,{useState} from 'react';
const Counter = ()=>{
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("Type here")

    console.log(count)
    return(
    <>

        <button onClick={()=> setCount(count+1)}>
            Click Me 
        </button>
        <button onClick={()=> setCount(0)}>
            Reset
        </button>
        <button onClick={()=> setCount(count-1)}>
            minus
        </button>
        <button onClick={()=> alert("hi,there!!!")}>
            greeting
        </button>
        <p>
            You click  {count} times
        </p>

        <input type = "text"
        value = {value} 
        onChange={(event)=>setValue(event.target.value)}
        / >
        <button onClick={()=> setValue("")}>
            Reset
        </button>
        <button onClick={()=> setValue(value * 33.55)}>
            Exchange
        </button>
        <h3>{value} to {value*33.55}dollar</h3>
        <h3>you type {value.length} characters</h3>

    </>
    )
};

export default Counter;