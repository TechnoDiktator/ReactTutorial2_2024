
import { useRef } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';



export default function Modal({children , open , className = ""}) {
    
    /*
    In this React code, the cleanup function inside useEffect will run in the following scenarios:

    When the open dependency changes: Each time the open value changes, 
    React will rerun the useEffect. Before re-executing, it will first 
    run the cleanup function from the previous execution to ensure there’s no lingering state.

    When the component unmounts: If the component that uses this useEffect 
    hook is removed from the DOM, React will run the cleanup function to tidy up 
    any resources or effects associated with the component.
    
    */
    const dialog = useRef()

    useEffect(() => {
        const modal = dialog.current
        if(open){
            modal.showModal()
        }

        //the clean up basically cleans up the previous instance of teh components execution before
        //executing the new instance
        return () => {
            return modal.close()
        }

    }, [open])

    return  (createPortal(
    <dialog className={`modal ${className}`} ref = {dialog}>{children}
    </dialog> ,
    document.getElementById('modal')))
}






