import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    html {
    font-size:12px;
    @media screen and (min-width: 500px) {
        font-size: 14px;
    }
    @media screen and (min-width: 750px) {
        font-size: 16px;
    }
    @media screen and (min-width: 1000px) {
        font-size: 18px;
    }
    }
 
    body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background-color: #ced4da
    }
`;

export default Global;
