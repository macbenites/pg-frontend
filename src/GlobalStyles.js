import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --primary: #004643;
    --secondary : #abd1c6;
    --text-color : #fffffe;
}


html, body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: var(--primary); 
}
`;
