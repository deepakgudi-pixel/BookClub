import {createGlobalStyle} from "styled-components";

export const GlobalStyle =  createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing: antialiased;
        font-family: 'Work Sans', sans-serif;
    }

    body::-webkit-scrollbar{
        display: none;
    }

`
