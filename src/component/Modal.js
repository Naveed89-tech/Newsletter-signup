import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";
import ModalOverLay from "./ModalOverLay";
const portalElement = document.getElementById("overlays");



function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay onOpenModal={props.onOpenModal}>
          {props.children}
        </ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
