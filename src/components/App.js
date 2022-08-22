import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [catergory, setCatergory] = useState(CATEGORIES)

function handleAddTask(newTask){
  setTasks([...tasks, newTask])
}

function handleDeleteTask(deletedTask){
  setTasks(tasks.filter((task) => task.text !== deletedTask)); 
}




  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm onTaskFormSubmit= {handleAddTask}/>
      <TaskList onDeleteTask= {handleDeleteTask}/> 
    </div>
  );
}

export default App;
