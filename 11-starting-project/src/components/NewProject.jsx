import { useRef } from "react";

import Input from "./ui/Input.jsx";
import Modal from "./ui/Modal.jsx";

export default function NewProject({ onAddProject, onCancel }) {
    const modal = useRef();

    const inputTitle = useRef();
    const inputDescription = useRef();
    const inputDueDate = useRef();

    function handleSave() {
        const enteredTitle = inputTitle.current.value;
        const enteredDescription = inputDescription.current.value;
        const enteredDueDate = inputDueDate.current.value;

        if (
            enteredTitle.trim() === "" 
            || enteredDescription.trim() === "" 
            || enteredDueDate.trim() === ""
        ) {
            modal.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle, 
            description: enteredDescription, 
            dueDate: enteredDueDate
        });
    }

    return <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops ..looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={inputTitle} label="Title" />
                <Input ref={inputDescription} isTextarea label="Description" />
                <Input type="date" ref={inputDueDate} label="Due Date" />
            </div>
        </div>
    </>
}