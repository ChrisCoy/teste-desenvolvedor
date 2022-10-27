import { createGlobalStyle } from "styled-components";
import { lightTheme } from "../themes/lightTheme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html,body{
    font: 400 1rem "Inter",Helvetica, sans-serif;
    color: ${() => lightTheme.primaryText};
  }

  fieldset{
    border: none;
    label{
      margin-right: 1rem;
      margin-left: 0.2rem;
    }
  }
  

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #868585;
}

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }  
  }
 
`;
