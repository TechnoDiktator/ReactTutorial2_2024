import NewTask from "./NewTask";



export default function Tasks({tasks,onAddT , onDeleteT}) {

    return (
        <section>
            <h2 className="text-exl font-bold text-stone-700 mb-4">
                Tasks
            </h2>
            <NewTask onAdd={onAddT}></NewTask>
            {tasks.length ===0&&<p className="text-stone-800 mb-4 my-4">
                No tasks added yet
            </p>}
            {tasks.length!=0&&<ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task)=>{
                    return (
                        <li className="flex justify-between my-4" key = {task.id}>
                            <span>{task.text}</span>
                            <button className="text-stone-700 hover:text-red-500" onClick={(task)=>onDeleteT(task.id)}> Clear </button>
                        </li>
                    )
                } )}
            </ul>}

        </section>
    )
}