import { useState } from "react"

export default function Player({initialName , symbol , isActive , onChangeName}) {

    const [isEditing , setIsEditing] = useState(false);

    const [playerName , setPlayerName] = useState(initialName)


    function handleClick() {
        
        //==================================
        //this is not the proper way to 
        //update a state based on previous state
        
        //setIsEditing(!isEditing)
        //=================================

        //when you want to toggle state based in the 
        //previous value of the state 
        //the react community says 
        //to acheive the same thing by using a function

        setIsEditing((editing)=>!editing)
        if(isEditing){
            onChangeName(symbol , playerName)
        }
    }

    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value)
    }

    //let btnCaption = "Edit"
    let editablePlayerName = <span className="player-name">{playerName}</span>
    
    if(isEditing){
        editablePlayerName = (
            <input type="text" required value={playerName} onChange={handleChange}/>
        )
        //btnCaption = "Save"
    }

    return (
        <>
            <li className={isActive?"active" : undefined}>
                <span className="player">
                    {editablePlayerName}
                    {/* < span className="player-name">{name}</span> */}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
            </li>
        </>

    )
}