import React, { useReducer } from "react";
import "./FormInput.css";
import Input from "./Input";

const emailReducer = (state, action) => {
  const reTest =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (action.type === "USER_EMAIL") {
    return {
      ...state,
      value: action.val,
      isValid: reTest.test(action.val) && action.val !== "",
      // action.val.includes("@" && "."),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

function FormInput(props) {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [errorMessage, setErrorMessage] = useState(false);
  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: "",
    isValid: true,
  });

  const changeEmailHandler = (e) => {
    dispatchEmailState({
      type: "USER_EMAIL",
      val: e.target.value,
    });
  };
  console.log(emailState);
  const submitHandler = (event) => {
    event.preventDefault();
    // little email validation on submit
    if (emailState.value.trim() !== "" && emailState.isValid) {
      props.onOpen();
      props.onOpenModal(emailState.value);
      // rest the value after submit of form
      emailState.value = "";
    } else {
      dispatchEmailState({ value: "", isValid: false });
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      // showing red border conditionally
      className={`form ${emailState.isValid === false ? "invalid" : ""}`}
    >
      <Input
        onChange={changeEmailHandler}
        value={emailState.value}
        label="Email address"
        input={{
          type: "email",
          id: "email",
          placeholder: "email@company.com",
        }}
      />
      {!emailState.isValid && (
        <span className="error"> Valid email required </span>
      )}

      <button className="button" type="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}

export default FormInput;
