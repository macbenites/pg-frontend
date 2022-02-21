import styled from "styled-components";

export const PlayerDiv = styled.div`

    display : flex;
    flex-wrap : wrap;
    flex-direction : column;
    background-color: #abd1c6;
    margin : 10px;
    width : 200px;
    
    border-radius : 20px;

    img {
        width : 120px;
        height : 100px;
        border-radius : 100%;
        margin-top: 10px;
        padding-left : 45px;
        padding-right : 45px
    }

    h3, h5, h4 {
        text-align : center;
    }
`