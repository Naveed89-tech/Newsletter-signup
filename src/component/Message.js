import React from "react";
import Modal from "./Modal";

import "../index.css";
import "./Message.css";
import IconSuccess from "./icons/IconSuccess";
function Message(props) {
  return (
    <Modal onClose={props.onClose}>
      <div className="modal-content">
        <IconSuccess />
        <h1 className="heading-primary">Thanks for subscribing</h1>
        <p className="modal-text-description">
          A confirmation email has been sent to
          <span className="email-address">{props.addEmail} </span>Please open it
          and click the button inside to confirm your subscription.
        </p>
        <button className="button" onClick={props.onClose}>
          Dismiss message
        </button>
      </div>
    </Modal>
  );
}

export default Message;
