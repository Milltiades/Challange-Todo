import styled from "styled-components";
import GlobalStylesComponent from "./components/GlobalStylesComponent";
import LoginComponent from "./components/LoginComponent";
import { Route, Routes } from "react-router-dom";
import UserPageComponent from "./components/UserPageComponent";
import StarterComponent from "./components/StarterComponent";



function App() {
  


  return (
   
     <Main>
      <GlobalStylesComponent/>
      <Routes>
        <Route path="/" element={<StarterComponent/>}/>
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/user" element={<UserPageComponent/>}/>
     </Routes>
    
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

  
`





