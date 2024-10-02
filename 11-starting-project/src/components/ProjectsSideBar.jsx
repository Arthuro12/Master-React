import Button from "./ui/Button.jsx";

export default function ProjectsSideBar({ projects, selectedProjectId, onStartAddProject, onSelectProject }) {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>+ Add project</Button>
        </div>
        <ul className="mt-8">
            {projects.map((currProject) => {
                let classes = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

                if (currProject.id === selectedProjectId) {
                    classes += " bg-stone-800 text-stone-200";
                } else {
                    classes += " text-stone-400";
                }

                return (
                    <li key={currProject.id}>
                        <button 
                            className={classes}
                            onClick={() => onSelectProject(currProject.id)}
                        >
                            {currProject.title}
                        </button>
                    </li>
                );
            })}
        </ul>
    </aside>
}