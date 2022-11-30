import React from "react";
import Card from "./Card";
const BlackCard=(props)=>{
  return (
    <Card type="black">
      {props.children}
    </Card>
  );
}

export default BlackCard;