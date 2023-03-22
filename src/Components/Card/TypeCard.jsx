import React from "react";

function TypeCard(props) {
  return (
    <div className={props.type.type.name + " typecard"}>
      <img
        src={"/assets/Icons/" + props.type.type.name + "Icon.svg"}
        alt=""
        height="25px"
        width="25px"
      />
      <span> {props.type.type.name}</span>
    </div>
  );
}

export default TypeCard;
