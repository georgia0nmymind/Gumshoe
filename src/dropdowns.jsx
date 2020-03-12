import React, { Component } from "react";

function CharDropdown(props) {
  // getChars() {
  //   this.props.updateData();
  //   const chars = [];

  //   console.log("error fetching node data");

  //   for (let i = 0; i < this.props.data.nodes.length; i++) {
  //     const current = this.props.data.nodes;
  //     chars.push(<option value={i}>{current.name}</option>);
  //   }
  //   return chars;
  // }

  const chars = [];
  const nodes = props.data.nodes || 0;

  console.log(props.data);

  for (let i = 0; i < nodes.length; i++) {
    const current = nodes[i];
    chars.push(<option value={i}>{current.name}</option>);
  }

  return <select id="chars">{chars}</select>;
}

export default CharDropdown;
