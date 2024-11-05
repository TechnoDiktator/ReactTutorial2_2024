import React from 'react';
import { useState } from 'react';
import { EXAMPLES } from '../../data';
import TabButton from '../TabButton';
import Section from '../Section.jsx';
import Tabs from '../Tabs.jsx';



export default function Examples(){


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

  console.log("RERENDERING EXAMPLES")

  let tabContect = <p>Please select a topic</p>
  if(selectedTopic){
    tabContect = (
      <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
      </div>
    )
  }
    return (
        <>
            {/*
            The id thing is not an actual id attribute 
            it is just a prop, just like title
            so it is not going to helpp us apply CSS!!1
            */}
            <Section id="examples" title={"examples"}>
                
                {/*WE CAN EVEN PASS AN ENTIRE COMPONENT AS PROP */}
                <Tabs buttons={
                    <>
                        <TabButton isSelected = {selectedTopic === "components"} onClickProp = {() => {handleClick("components")}}>COMPONENT</TabButton>
                        <TabButton isSelected = {selectedTopic === "jsx"} onClickProp = {() => {handleClick("jsx")}}>JSX</TabButton>
                        <TabButton isSelected = {selectedTopic === "props"} onClickProp = {() => {handleClick("props")}}>PROPS</TabButton>
                        <TabButton isSelected = {selectedTopic === "state"} onClickProp = {() => {handleClick("state")}}>STATE</TabButton>
                    </>
                }>
                    {tabContect}
                </Tabs>
                
                <menu>
                {/* <TabButton isSelected = {selectedTopic === "components"} onClickProp = {() => {handleClick("components")}}>COMPONENT</TabButton>
                <TabButton isSelected = {selectedTopic === "jsx"} onClickProp = {() => {handleClick("jsx")}}>JSX</TabButton>
                <TabButton isSelected = {selectedTopic === "props"} onClickProp = {() => {handleClick("props")}}>PROPS</TabButton>
                <TabButton isSelected = {selectedTopic === "state"} onClickProp = {() => {handleClick("state")}}>STATE</TabButton>
                
                 */}
                {/*we could have used 
                    a diffent 
                    approach also 
                    like 
                    <TabButton buttonlabel="COMPONENT"></TabButton>
                    //and used the generic props object instead of the childrens
                */}
                </menu>
                {/* <div id="tab-content">
                    {tabContect}
                </div> */}
            </Section>
            <h2>{selectedTopic}</h2>
        </>
    )


}