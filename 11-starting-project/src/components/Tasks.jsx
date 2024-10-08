// import { useState } from "react";

import NewTask from "./NewTask";

export default function Tasks({ tasks, selectedProjectId, onAddTask, onDeleteTask}) {
    // const [tasks, setTasks] = useState([]);

    // function handleAddTask(task) {
    //     setTasks((prevState) => {
    //         return [
    //             ...prevState,
    //             task
    //         ];
    //     });
    // }
    const currentProjectTasks = tasks.filter((currTask) => currTask.projectId === selectedProjectId);

    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAddTask={onAddTask} />
        {!currentProjectTasks ? 
            <p className="text-stone-800 my-4">
                This project does not have any tasks yet.
            </p> :
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {currentProjectTasks.map((currTask) => (
                    <li className="flex justify-between my-4" key={currTask.id}>
                        <span>{currTask.text}</span>
                        <button className="text-stone-700 hover:text-red-500" onClick={() => onDeleteTask(currTask.id)}>Clear</button>
                    </li>
                ))}
            </ul>}
    </section>
}