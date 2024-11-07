import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId:undefined,
    projects:[]
  })
  console.log(projectsState)


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

      const newProject = {
        ...projectData,
        id:Math.random()
      }

      return {
        ...prevState,
        selectedProjectId:undefined,
        projects : [...prevState.projects , newProject]
      }
    })
  }

  let content;
  if(projectsState.selectedProjectId === null){
      content = <NewProject onAdd={handleAddProject} ></NewProject>
  }else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAtProject}/>
  }else{
    ""
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}

      <ProjectSidebar onStartAddProject = {handleStartAtProject} projects={projectsState.projects}></ProjectSidebar>
      {/* <NewProject></NewProject>
      <NewProject></NewProject>
      <NewProject></NewProject> */}
      {content}
    </main>
  );
}

export default App;
