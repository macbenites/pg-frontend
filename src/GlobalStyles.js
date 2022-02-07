import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --primary: #004643;
    --primary-light: #206F6C;
    --secondary : #abd1c6;
    --tertiary : #e16162;
    --Links : #f9bc60;
    --text-color : #fffffe;
    --stroke : #001e1d;
    

}


html, body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: var(--primary); 
}
`;
