import React from "react";
function call(){
    alert("Message from JavaScript alert");
    console.log("Message to developer");
}
function Day1(){
    return(
        <div>
            <h1>Let we see the output of JAVASCRIPT</h1>
            <button onClick={call}>Click</button>
        </div>
    )
}
export default Day1;