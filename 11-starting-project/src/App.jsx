import { useState } from "react";

import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import NewProject from "./components/NewProject.jsx";

import Project from "./components/Project.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  // const [selectedComponent, setSelectedComponent] = useState("NoProjectSelected");

  // function handleSelectComponent() {
  //   if (selectedComponent === "NoProjectSelected") {
  //     setSelectedComponent("NewProject");
  //   }
  // }
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddProject(projectDetails) {
    const projectId = Math.random();
    const newProject = {
      ...projectDetails,
      id: projectId
    }

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {id: taskId, projectId: prevState.selectedProjectId, text};

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      const foundProject = prevState.projects.find((currProject) => currProject.id === id);
      const updatedProjects = prevState.projects.splice(prevState.projects.indexOf(foundProject), 1);
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      const taskWithId = prevState.tasks.find((currTask) => currTask.id === id);
      const updatedTasks = prevState.tasks.splice(prevState.tasks.indexOf(taskWithId), 1);

      return {
        ...prevState,
        tasks: [...prevState.tasks, ...updatedTasks]
      }
    });
  }

  function handledStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    });
  }
  
  let selectedProject;
  if (projectsState.selectedProjectId) {
    selectedProject = projectsState.projects.find((currProject) => currProject.id === projectsState.selectedProjectId);
  }

  let content = <Project 
                  project={selectedProject} 
                  tasks={projectsState.tasks}
                  onDelete={handleDeleteProject} 
                  onAddTask={handleAddTask}
                  onDeleteTask={handleDeleteTask}
                />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject 
                onAddProject={handleAddProject} 
                onCancel={handleCancelAddProject} 
              />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handledStartAddProject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSideBar 
          projects={projectsState.projects}
          selectedProjectId={projectsState.selectedProjectId}
          onStartAddProject={handledStartAddProject} 
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;