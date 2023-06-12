import React from "react";
import "./PropertiesList.css";
import IconList from "./icons/IconList";

function PropertiesList() {
  return (
    <ul>
      <li>
        <IconList />
        <span> Product discovery and building what matters</span>
      </li>
      <li>
        <IconList />
        <span> Measuring to ensure updates are a success</span>
      </li>
      <li>
        <IconList />
        <span> And much more!</span>
      </li>
    </ul>
  );
}

export default PropertiesList;
