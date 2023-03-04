import propTypes from "prop-types";
import React, { useState } from "react";

const Formulario = (props) => {

    const [task, setTask] = useState ("");
    
    const handleChange = (e) => {
        setTask(e.target.value);
        console.log(task)
    };

    const handleDown = (e) => {
        if (e.keyCode == 13){
            props.addNewTask(task)
        };
    };

    return (
        <div>
            <h3>Mis tareas</h3>
            <input onChange={handleChange} type="text" name="tarea" onKeyDown = {handleDown} value = {task}/>
            
            <div class="card">
                <div class="card-body">
                    <p class="card-text"> {task} </p>
                </div>
            </div>

        </div>
    );

};

export default Formulario ;