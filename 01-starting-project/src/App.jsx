import  reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png"

//this is a named export
import { CORE_CONCEPTS } from "./data";



const reactDescriptions = ["Fundamental" , "Crucial" , "Core"]

function getRandomInt(max){
  return Math.floor(Math.random()*(max + 1))
}

function Header() {
  const description = reactDescriptions[getRandomInt(2)]


  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

//using prop destructuring
//you have to use the same names as what you passed when you executed the componenet
//or called the componenet
function CoreConcept({image , title , description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
