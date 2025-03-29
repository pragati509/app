import { useState } from "react";
export default function counter(){
    const [count,setCount] = useState(0);
    return (
        <div>
            <button>count : {count}</button>
        </div>
    );
}