import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --primary: #004643;
    --text-color : #fffffe;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body{
    font-family: 'Roboto', sans-serif;
    background-color: var(--primary); 
}

`;
