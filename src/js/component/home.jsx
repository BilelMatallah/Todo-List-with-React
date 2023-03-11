import React, {useState} from "react";
//import Formulario from "./Formulario.jsx";



//create your first component
const Home = () => {

const [inputValue, setInputValue] = useState ("");

const [tareas, setTareas] = useState ([])

const añadirTarea = (e) => {
    if(e.key === "Enter") {
        setTareas(tareas.concat(inputValue));
        setInputValue("");
    }

};

	return (
		<div className="container">
			<ul>
                <h1>Todos</h1>
                <li>
                    <input type="text" onChange={(e) =>setInputValue(e.target.value)} 
                    onKeyDown={añadirTarea} placeholder="What do you have to do?" value={inputValue}/>
                </li>
                <li>
                    {tareas.map((nuevaTrea) => (
                        <li>
                            {nuevaTrea}
                        </li>
                    ))}
                </li>
            </ul>
		</div>
	);
};

export default Home;