import {render} from "react-dom";
import Enter from "./components/Enter";
import Display from "./components/Display";
import React, {useState} from "react";





const App = function () {

    const [taskList, setTaskList] = useState([]);

    const processTask = function(task){
       const newArr = [];

       for(let i=0;i<taskList.length;i++){
           newArr.push(taskList[i]);
       }

        newArr.push(task);
        setTaskList(newArr);

        console.log("PROCESSED TASK FROM APP",newArr);
    }



    return (
        <div>
            <Enter taskprocessor={processTask}/>

            <Display tasklist={taskList}/>

        </div>
    );
}

render(<App/>, document.getElementById("root"));