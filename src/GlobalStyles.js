import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --primary: #004643;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body{
    background-color: var(--primary); 
}

`;
