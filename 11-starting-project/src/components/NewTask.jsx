import { useState } from "react";

export default function NewTask({ onAddTask }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleTaskInput(event) {
        setEnteredTask(event.target.value);
    }

    function handleAddTask(enteredTask) {
        onAddTask(enteredTask);
        setEnteredTask("");
    }

    return (
        <div className="flex items-center gap-4">
            <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" value={enteredTask} onChange={handleTaskInput} />
            <button className="text-stone-700 hover:text-stone-950" onClick={() => handleAddTask(enteredTask)}>Add Task</button>
        </div>
    );
}