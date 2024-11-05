
import Header from "./components/Header/Header";
//this is a named export
import Examples from "./components/Header/Examples";
import CoreConcepts from "./components/Header/CoreConcepts";


//state hooks are directly 
//called on the top level that is directly insode 
//the component 

//they cannot be called inside any helper or a loop or switch etc

//is you have custoHooks then the 
//other statae hooks can be called inside the custom ho0k
function App() {

  //every time the useState works
  //react rerenders the 
  return (
    <>
      <Header></Header>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
