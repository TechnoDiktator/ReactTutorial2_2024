import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId:undefined,
    projects:[]
  })



  function handleStartAtProject() {
    setProjectsState(prevState => {
      return  {
        ...prevState,
        selectedProjectId:null,

      }
    });

  }

  let content;
  if(projectsState.selectedProjectId === null){
      content = <NewProject></NewProject>
  }else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAtProject}/>
  }else{
    ""
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}

      <ProjectSidebar onStartAddProject = {handleStartAtProject}></ProjectSidebar>
      {/* <NewProject></NewProject>
      <NewProject></NewProject>
      <NewProject></NewProject> */}
      {content}
    </main>
  );
}

export default App;
