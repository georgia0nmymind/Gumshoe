import React, { Component } from "react";

function CharAdder(props) {
  return (
    <div id="adder">
      <p>Add Character:</p>
      <form action="/addChar">
        <label htmlFor="charName">Name: </label>
        <input type="text" id="charName" name="charName" />

        <label htmlFor="charOcc">Occupation: </label>
        <input type="text" id="charOcc" name="charOcc" />

        <label htmlFor="charScope">Universe: </label>
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

export default CharAdder;
