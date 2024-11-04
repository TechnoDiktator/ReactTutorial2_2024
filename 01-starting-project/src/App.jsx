
import Header from "./components/Header/Header";
//this is a named export
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";
import CoreConcept from "./components/CoreConcept";
import {EXAMPLES} from "./data"
import {useState} from 'react'

//state hooks are directly 
//called on the top level that is directly insode 
//the component 

//they cannot be called inside any helper or a loop or switch etc

//is you have custoHooks then the 
//other statae hooks can be called inside the custom ho0k
function App() {

  //every time the useState works
  //react rerenders the 

  //const [selectedTopic ,setSelectedTopic] =   useState("Please click a button");
  const [selectedTopic ,setSelectedTopic] =   useState();

  function handleClick(selectedButton) {
    //selected button should be a striing
    //"components" , "jsx , "props" or "state"
    //console.log("Prev Button pressed was", selectedButton)
    setSelectedTopic(selectedButton)
    console.log("Button pressed is", selectedButton)
    
    
    //THIS IS NOT VALID ANYMORE AS THE NEW REACT VERSION
    //FIRST UPDATES THE STATE USING THE setStateTopic
    //SO THE LATEST VALUE OS ALREADY PRESENT
    //console.log("Note  that it is showing that the button pressed is the previous button")
    //console.log("This is because the handleClick executres first after which the \n the rerendering is scheduled")
    //console.log("Which means that the log is printed first with the previous value that is prev pressed button")
    //console.log("after that the componenet renders again")
  }

  console.log("RERENDERING 2")

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {console.log("RERENDERING 1")}
          {/*
          
          //MANUAL way
          <CoreConcept 
          title={CORE_CONCEPTS[0].title} 
          description ={CORE_CONCEPTS[0].description}
          image = {CORE_CONCEPTS[0].image}
          />
          <CoreConcept 
          title={CORE_CONCEPTS[1].title} 
          description ={CORE_CONCEPTS[1].description}
          image = {CORE_CONCEPTS[1].image}
          />

          <CoreConcept 
          title={CORE_CONCEPTS[2].title} 
          description ={CORE_CONCEPTS[2].description}
          image = {CORE_CONCEPTS[2].image}
          />

          <CoreConcept 
          title={CORE_CONCEPTS[3].title} 
          description ={CORE_CONCEPTS[3].description}
          image = {CORE_CONCEPTS[3].image}
          /> */}
          <CoreConcept 
          title={CORE_CONCEPTS[0].title} 
          description ={CORE_CONCEPTS[0].description}
          image = {CORE_CONCEPTS[0].image}
          />
          {/* Object destructuting way */}

          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>

          </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
            <TabButton onClickProp = {() => {handleClick("components")}}>COMPONENT</TabButton>
            <TabButton onClickProp = {() => {handleClick("jsx")}}>JSX</TabButton>
            <TabButton onClickProp = {() => {handleClick("props")}}>PROPS</TabButton>
            <TabButton onClickProp = {() => {handleClick("state")}}>STATE</TabButton>
              {/*we could have used 
                a diffent 
                approach also 
                like 
                <TabButton buttonlabel="COMPONENT"></TabButton>
                //and used the generic props object instead of the childrens
              */}
            </menu>
            <div id="tab-content">

              {(selectedTopic === undefined || selectedTopic === "" )?
              <p>Please select a topic</p>:  
              <>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
              </>
              }
            </div>
            
            

        </section>

        <h2>{selectedTopic}</h2>
      </main>
    </div>
  );
}

export default App;
