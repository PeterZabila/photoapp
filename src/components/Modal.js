import React, { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './style.module.css'
const modalRootElement = document.querySelector("#modal");




const Modal = ({open, onClose}) => {
const element = useMemo(() => document.createElement("div"), []);

useEffect(() => {
  modalRootElement.appendChild(element);

  return () => {
    modalRootElement.removeChild(element)
  }
})

if(open) {
  return createPortal(
    <div className={style.modal_background }>
      <div className={style.modal_card }>
          <p>My contact information</p>
          <ul>
            <li>My cell: +380631353552</li>
            <li>Email me: petrozabila@gmail.com</li>
          </ul>
          <h3>Feel free to write me</h3>
          <form>
            <textarea
                name='your message'
                value=""
            />
          </form>
          <button onClick={onClose}>Close</button>
      </div>
    </div>,
    element
  );
}

return null;
  
};

export default Modal
