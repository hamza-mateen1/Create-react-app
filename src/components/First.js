import React,{ useState } from "react";
import data from '../data.json';

function First(){

    const [List, setList] = useState(" ");
    console.log(data);
    return(
       <div>

<input type="text"></input><br />
<button>Submit</button>

{data.map(d=>{
return(
    <h1 key = {d.id}> {d.task}</h1>
)
})}
       </div>
      )
}

export default First;