import React, { Component } from "react";
import CharDropdown from "./dropdowns.jsx";

function RelAdder(props) {
  return (
    <div id="adder">
      <p>Add Relationship:</p>
      <form action="/addChar">
        <label htmlFor="charName">From: </label>
        <CharDropdown data={props.data} updateData={props.updateData} />

        <label htmlFor="charOcc">To: </label>
        <CharDropdown data={props.data} updateData={props.updateData} />

        <label htmlFor="charScope">Type: </label>
        <input type="text" id="charScope" name="charScope" />

        <input
          type="submit"
          value="Submit"
          onClick={() => props.updateData()}
        />
      </form>
    </div>
  );
}

export default RelAdder;
