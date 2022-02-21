import styled from "styled-components";

export const PlayerDiv = styled.div`

    display : flex;
    flex-wrap : wrap;
    flex-direction : column;
    background-color: #abd1c6;
    color:  #004643;
    margin : 10px;
    width : 200px;
    :hover{
        background-color: #F9BC60;
    }
    
    border-radius : 20px;

    img {
        width : 120px;
        height : 100px;
        border-radius : 100%;
        margin-top: 20px;
        padding-left : 45px;
        padding-right : 45px
    }

    h3{
        text-align : center;
        font-size: 25px;
        padding: 10px;
        margin-right: 8px;
    }
    h4{
        text-align : center;
        font-size: 20px;
        margin-right: 8px;
        margin-top: -10px;
    }
    h5{
        text-align : center;
        font-size: 15px;
        margin-top: -10px;
    }
`