import React from "react";
import { MainCards, Amount, Description } from "../Styles/Cards";

export default function Cards({ name, description, link, amount }) {
  return (
    <MainCards>
      <div>
        <img src={link} alt={name} />
      </div>
      <Description>{description}</Description>
      <Amount>{amount}</Amount>
    </MainCards>
  );
}
