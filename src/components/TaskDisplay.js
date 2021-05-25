import React, {useState} from "react";
import ReactDOM from "react-dom";


const TaskDisplay = function (props) {

    return (
        <div>
            {props.tasklist.map((element, index) => {
                return (
                    <h1 key={index}>
                        {element}
                    </h1>
                );
            })}
        </div>

    )


}


export default TaskDisplay;