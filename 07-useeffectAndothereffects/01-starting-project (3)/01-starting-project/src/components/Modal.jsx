import {  useRef } from 'react';
import { createPortal } from 'react-dom';

//const Modal = forwardRef(function Modal({ children }, ref) {

function Modal({ open,children }) {
  const dialog = useRef();


  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });

  return createPortal(
    <dialog open={open} className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
