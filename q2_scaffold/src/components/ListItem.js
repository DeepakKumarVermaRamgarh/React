import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  const { id, name, link, icon, bgColor } = props.data;
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor
      }}
    >
      <img src={icon} alt={`${name}_con`} />
      <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem;
