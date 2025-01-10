import react, { useState } from "react";

const Counter = () => {
   const[count, setCount] = useState(0);

   const Handlechange = (e) => {
    setCount (count => count +1 );
   }
   const Handlechange2 = (e) => {
    setCount (count => count -1);
   }
   return (
    <div style={{textAlign: "center"}}>
        count: {count}<br/>
        <button onClick={Handlechange}>Click </button>
        <button onClick={Handlechange2}>click</button>
    </div>
   )
};

export default Counter;