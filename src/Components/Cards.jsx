import React from "react";
import { MainCards } from "../Styles/Cards";

export default function Cards({ image, title, number }){
    return(
        <MainCards>
        <main>
            <img src='pngwing.com.png' alt='pngwing.com.png' width='50px' height='50px'/>
            <h4>{title}Canchas dispnibles</h4>
            <h2>{number} 10</h2>
        </main>
        </MainCards>
    );
};