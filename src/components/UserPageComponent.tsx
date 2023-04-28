import { useEffect, useState } from "react";
import styled from "styled-components";
import TaskComponent from "./TaskComponent";
import { useNavigate } from "react-router-dom";

export default function UserPageComponent() {
  const [userName, setUserName] = useState<any>();
  const [getFile, setGetFile] = useState<any>();
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isDay, setIsDay] = useState<boolean>(true);
  const navigate = useNavigate();
  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    setGetFile(localStorage.getItem("myPhoto"));
  }, ["/user"]);
  return (
    <Div>
      <Header>
        <H1 >TO DO</H1>
        <DivUser>
          <P>{userName && userName}</P>
          <Img img={`url(${getFile})`} />
          <MenuDiv onClick={() => setIsMenu(!isMenu)} />
        </DivUser>
      </Header>
      <TaskComponent isDay={isDay}/>
      <Menu display={isMenu ? "column" : "none"}
      background={isDay? "#E6EBFF" : "black"}>
        <Theme
          background = {isDay? "white" : "#d8d1d12c"}
          content={isDay ? "end" : "start"}
          img={isDay? `url('/assets/sun.svg')` : `url('/assets/moon.svg')`}
          position={!isDay? "right" : "left"}
          onClick={() => setIsDay(!isDay)}
        >
          <Circle background = {isDay? "#e6ebff" : "black"} />
        </Theme>
        <Logout onClick={() => {
            navigate("/login");
            localStorage.clear();
            }}>Log Out</Logout>
      </Menu>
    </Div>
  );
}
const Circle = styled.div<any>`
  width: 50%;
  height: 22px;
  border-radius: 4px;
  background: ${(props) => props.background};
  
`;
const Theme = styled.button<any>`
  width: 100%;
  border-radius: 4px;
  background: ${(props) => props.background};
  display: flex;
  justify-content: ${(props) => props.content};
  align-items: center;
  padding: 2px;
  background-image: ${(props) => props.img};
  background-repeat: no-repeat;
  background-size: 45% 80%;
  background-position: ${(props) => props.position};
  border: none;
  cursor: pointer;
`;
const Logout = styled.button`
  padding: 10px;
  color: red;
  border: none;
  cursor: pointer;
  background: transparent;
 
  :hover {
    opacity: 0.8;
  }
`;

const Menu = styled.div<any>`
  padding: 10px;
  display: ${(props) => props.display};
  color: white;
  background: ${(props) => props.background};
  border-radius: 4px;
  position: absolute;
  top: 118px;
  right: 24px;
  animation: comeIn 1s alternate;
  @keyframes comeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MenuDiv = styled.button`
  width: 4.25rem;
  height: 4.25rem;
  position: absolute;
  right: 0;
  border-radius: 50%;
  cursor: pointer;
  background: transparent;
  border: none;
  z-index: 100;
  :hover {
    background-color: black;
    opacity: 0.2;
  }
`;
const P = styled.p`
  font-weight: 300;
  font-size: 1.375rem;
  line-height: 1.9375rem;
  text-transform: capitalize;
`;

const H1 = styled.h1`
  font-weight: 900;
  line-height: 3.1875rem;
  
`;
const Img = styled.div<any>`
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 50%;
  background: #e6ebff;
  margin-left: 20px;
  background-image: ${(props) => props.img};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;
const DivUser = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Header = styled.div`
  width: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.9375rem 1.2rem;

  align-items: center;
`;
