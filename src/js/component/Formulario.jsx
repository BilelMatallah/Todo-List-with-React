import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";


const Formulario = () => {

    const [inputValue, setInputValue] = useState ("");

    //Lista de Tareas
    const [tareas, setTareas] = useState ([])
    
    //onChange
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    //Guardar nueva tarea
    const añadirTarea = (e) => {
        if(e.key === "Enter") {
            setTareas(tareas.concat(inputValue));
            setInputValue("")}
    };

    //El icono de eliminar solo se muestra cuando la tarea está activada
    const [show, setShown] = useState(false);

    return (
        <div>
            <h3>Mis tareas</h3>
            <input onChange={handleChange} type="text" name="tarea" onKeyDown = {añadirTarea} value = {inputValue}/>
            
            <div class="card">
                <div class="card-body">
                {tareas.map((nuevaTarea, index) => (
                    //Aquí se añade la nueva tarea y el icono <FaTrash /> que al hacer click en él, borramos la tarea
                    <li class="card-text"
                    
                    //Aquí es donde usamos el hover en React para mostrar el icono de borrar solo cuando la tarea está activada
                        onMouseEnter= {() => setShown(true)}
                        onMouseLeave={() => setShown(false)}> 
                        
                        {nuevaTarea}
                        
                        {show && (
                            <FaTrash onClick={() => 
                            setTareas (
                                tareas.filter (
                                    (tareas, currentIndex) =>
                                    index != currentIndex))}/>
                        )}

                    </li>))
                }  
                </div>
            </div>

        </div>
    );
}


export default Formulario ;