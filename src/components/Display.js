import React, {useState} from "react";
import ReactDOM from "react-dom";
import TaskDisplay from "./TaskDisplay";


const Display = (props) => {

    return (
        <div>
            <TaskDisplay tasklist={props.tasklist}/>
        </div>
    );

}


export default Display;