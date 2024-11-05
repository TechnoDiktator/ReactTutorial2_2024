import { CORE_CONCEPTS } from "../../data"
import CoreConcept from "../CoreConcept"


export default function CoreConcepts() {

    return(
        <>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>


          {console.log("RERENDERING CORE CONCEPTS")}
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


          {/* 
          <CoreConcept 
          title={CORE_CONCEPTS[0].title} 
          description ={CORE_CONCEPTS[0].description}
          image = {CORE_CONCEPTS[0].image}
          /> */}
          {/* Object destructuting way */}
          {/* 
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
          */}


          {
          CORE_CONCEPTS.map((conceptItem) => {
            return (
              //the hkey prop is also unique to react 
              //and must be present whenever we are uusing
              //map orr filter methods 
              //it must be assigned some think unique
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
            )
          })
          }

          </ul>
        </section>
        
        </>


    )

}