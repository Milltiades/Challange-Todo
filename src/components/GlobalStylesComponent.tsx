import { createGlobalStyle } from "styled-components";

export default function GlobalStylesComponent() {
  return <GlobalStyles />;
}

const GlobalStyles = createGlobalStyle`
    :root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
html{
    font-size: 16px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
  

}

body {

  min-width: 320px;
  min-height: 100vh;
  background: #000000;
  
 
}

button {
  transition: all 0.5s ease;
}

`;
