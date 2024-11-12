
import { useRef } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';



export default function Modal({children , open , className = ""}) {
    
    const dialog = useRef()

    useEffect(() => {
        const modal = dialog.current
        if(open){
            modal.showModal()
        }

        return () => {
            return modal.close()
        }

    }, [open])

    return  (createPortal(
    <dialog className={`modal ${className}`} ref = {dialog}>{children}
    </dialog> ,
    document.getElementById('modal')))
}






