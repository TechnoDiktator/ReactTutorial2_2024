import { useRef } from "react";
import Input from "./Input";



export default function NewProject(){

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    
    
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-900">Cancel</button>
                </li>
                <li>
                    <button className="rounded-md px-6 py-2 bg-stone-800 text-stone-50 hover:text-slate-300">Save</button>
                </li>
            </menu>
            <div>
                <Input label={"Title"}></Input>
                <Input istextarea={true} label={"Description"}></Input>
                <Input label={"Duedate"}></Input>
            </div>
        </div>

    )


}