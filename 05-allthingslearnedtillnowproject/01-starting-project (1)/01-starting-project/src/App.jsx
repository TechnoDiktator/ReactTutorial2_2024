import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId:undefined,
    projects:[],
    tasks:[]
  })
  console.log(projectsState)

  function handleDeleteProject() {
    setProjectsState((prevstate) => {
      return{
        ...prevstate,
        selectedProjectId:undefined,
        projects:prevstate.projects.filter((project)=>{
          //if the curernt project id is not equal to the selected project id
          //we will not delete it
          return project.id !== prevstate.selectedProjectId
        })
      }
    })
  }

  function handleStartAtProject() {
    setProjectsState(prevState => {
      return  {
        ...prevState,
        selectedProjectId:null,

      }
    });

  }

  function handleCancleAddProject() {
    setProjectsState(prevState => {
      return  {
        ...prevState,
        selectedProjectId:undefined,

      }
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id:projectId,
      }

      return {
        ...prevState,
        selectedProjectId:undefined,
        projects : [...prevState.projects , newProject]
      }
    })
  }
    function handleAddTask(text){
      setProjectsState(prevState => {
        const taskId = Math.random();
        const newTask = {
          text:text,
          id:taskId,
          projectId:prevState.selectedProjectId
        }

        return {
          ...prevState,
          tasks:[newTask , ...prevState.tasks]
        }
      })
  }
  function handleDeleteTaask(id){
      //http://localhost:5173/
      setProjectsState(prevState => {

        return {
          ...prevState,
          tasks:prevState.tasks.filter((task)=>task.id != id)
        }
      })
  
  }



  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return  {
        ...prevState,
        selectedProjectId:id,

      }
    });
  }

  let selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)



  let content = <SelectedProject project = {selectedProject} 
  onDeleteProject={handleDeleteProject} 
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTaask}
  tasks={projectsState.tasks}
  ></SelectedProject>

  if(projectsState.selectedProjectId === null){
      content = <NewProject onCancel = {handleCancleAddProject} onAdd={handleAddProject} ></NewProject>
  }else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAtProject}/>
  }else{
    ""
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}

      <ProjectSidebar onSelectProject = {handleSelectProject} onStartAddProject = {handleStartAtProject} projects={projectsState.projects}></ProjectSidebar>
      {/* <NewProject></NewProject>
      <NewProject></NewProject>
      <NewProject></NewProject> */}
      {content}
    </main>
  );
}

export default App;
