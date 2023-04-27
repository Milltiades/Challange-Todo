import styled from "styled-components";
import GlobalStylesComponent from "./components/GlobalStylesComponent";
import LoginComponent from "./components/LoginComponent";


function App() {


  return (
   
     <Main>
     <GlobalStylesComponent/>
     <LoginComponent/>
    
     </Main>
  )
}

export default App;

const Main = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 2.5rem 1.25rem;
  
`





