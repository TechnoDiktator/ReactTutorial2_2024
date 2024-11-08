import { useState } from "react"



export default function NewTask({onAdd}) {

    const [enteredTask , setEnteredTask] = useState("")

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }


    function handleClick(){
        setEnteredTask(``)
        onAdd(enteredTask)
    }


    return (
        <div className="flex items-center gap-4">
            <input onChange={handleChange} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onClick={handleClick} className=" bg-slate-400 p-2 rounded-md text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )

}   