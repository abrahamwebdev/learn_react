import React from "react";

const Card=(props)=>{
  return (
    <div className={"card card-type-"+props.type}>
      {props.children}
    </div>
  );
}

export default Card;