import React from "react";
import "./ModalOverLay.css";
function ModalOverLay(props) {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
}

export default ModalOverLay;
