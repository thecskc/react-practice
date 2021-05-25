import React from "react";
import ReactDOM from "react-dom";


const Enter = (props) => {

    const submitButton = (event) => {

        const text = document.getElementById("task").value;
        props.taskprocessor(text);
    }

    return (
        <div>
            <input type="text" id="task" name="task"/>
            <button onClick={(e)=>submitButton(e)}>Submit</button>
        </div>

    );

}

export default Enter;