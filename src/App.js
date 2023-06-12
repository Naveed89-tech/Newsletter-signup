import React, { useState, useEffect } from "react";
import "./App.css";

import FormInput from "./component/FormInput";
import PropertiesList from "./component/PropertiesList";
import Desktop from "./component/icons/Desktop";
import Message from "./component/Message";
import Mobile from "./component/icons/Mobile";

function App(props) {
  const [isShown, setShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 920);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 920);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const emailDataHandler = (data) => {
    setEmail(data);
  };

  const openModalHandler = () => {
    setShown(true);
  };
  const closeModalHandler = () => {
    setShown(false);
  };
  return (
    <div className="main-container">
      {isShown && <Message onClose={closeModalHandler} addEmail={email} />}

      <div className="textBox">
        <div>
          <h1 className="heading-primary">Stay updated!</h1>
          <p className="text-description">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>

        <div>
          <PropertiesList />
        </div>
        <FormInput onOpen={openModalHandler} onOpenModal={emailDataHandler} />
      </div>
      <div className="image-box">{isDesktop ? <Desktop /> : <Mobile />}</div>
    </div>
  );
}

export default App;
