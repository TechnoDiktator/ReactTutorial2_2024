import { useEffect , useState } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 5000
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  

  useEffect(()=>{
    console.log("TIMER SET")
    const timer = setTimeout(() => {
      onConfirm()
    }  , 5000)

    //clean up function 
    return () => {
      console.log("cleaning up timer")
      clearTimeout(timer)
    }
    
  } , [onConfirm])


  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER}></ProgressBar>
    </div>
  );
}
