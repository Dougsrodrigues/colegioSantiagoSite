import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


  *{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box
  }

  body{
    height:2000px;
    background: #EFEFEF;
    -webkit-font-smoothing: antialiased ;
  }

body,input,button{
  font: 14px ,sans-serif
}

  button{
    cursor: pointer;
  }

`;
