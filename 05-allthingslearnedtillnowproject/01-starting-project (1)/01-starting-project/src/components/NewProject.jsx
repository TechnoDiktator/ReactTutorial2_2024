import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";



export default function NewProject({onAdd}){

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const modal = useRef()
    function handleSave() {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = description.current.value
        //if eny thing is empty the project is notvalid
        if(enteredTitle.trim() === "" || 
        enteredDescription.trim() ==='' || 
        enteredDueDate.trim() === ""){
            //show the error modal
            modal.current.open()
            return 
        }
        

        onAdd({
            title :enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate,
        })
    }
    
    return (
        <>
        <Modal ref={modal} buttonCaption={"Okay"}>
            <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">Invalid Input</h2>
            <p className="text-stone-500-mb mb-4">Oops looks like you forgot to enter a value</p>
            <p className="text-stone-500-mb mb-4">Please make sure you provide a valid value for every input field</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-900">Cancel</button>
                </li>
                <li>
                    <button onClick={handleSave}
                    className="rounded-md px-6 py-2 bg-stone-800 text-stone-50 hover:text-slate-300">
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label={"Title"}></Input>
                <Input ref = {description} istextarea={true} label={"Description"}></Input>
                <Input type="date" ref = {dueDate} label={"Duedate"}></Input>
            </div>
        </div>
        </>

    )


}