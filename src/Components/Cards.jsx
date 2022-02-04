import React from "react";
import { MainCards } from "../Styles/Cards";

export default function Cards({ image, title, number }){
    return(
        <MainCards>
        <main>
            <img src={image} alt='img' width='50px' height='50px'/>
            <h2>{number} 10</h2>
            <h4>{title}Canchas dispnibles</h4>
        </main>
        </MainCards>
    );
};