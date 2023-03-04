import React, {useState} from "react";
import Formulario from "./Formulario.jsx";



//create your first component
const Home = () => {

const [taskList, setTaskList] = useState ("");

const addNewTask = (newTask) => {
	setTaskList(taskList.concat(newTask));
};

	return (
		<div>
			<Formulario addNewTask= {addNewTask} />
		</div>
	);
};

export default Home;
