import { useEffect, useState } from 'react'
import styled from 'styled-components'
import TaskComponent from './TaskComponent';

export default function UserPageComponent() {
    const [userName, setUserName] = useState<any>();
    const [getFile, setGetFile] = useState<any>();
    useEffect(() => {
        setUserName(localStorage.getItem('name'));
        setGetFile(localStorage.getItem('myPhoto'));
    }, ['/user'])
  return (
    <Div>
    <Header>
        <H1>TO DO</H1>
        <DivUser>
            <P>{userName && userName}</P>
            <Img img={`url(${getFile})`}/>
        </DivUser>
    </Header>
    <TaskComponent/>
    </Div>
  )
}
const P = styled.p`
    font-weight: 300;
    font-size: 1.375rem;
    line-height: 1.9375rem;
    text-transform: capitalize;
`

const H1 = styled.h1`
    font-weight: 900;
    line-height: 3.1875rem;
    
`
const Img = styled.div<any>`
    width: 4.25rem;
    height: 4.25rem;
    border-radius: 50%;
    background: #E6EBFF;
    margin-left: 20px;
    background-image: ${(props) => props.img};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
const DivUser = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
`

const Div = styled.div`
width: 100%;
    display: flex;
    flex-direction: column;
    
`


const Header = styled.div`
    width: 100%;
    background: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.9375rem 1.2rem;
    
    align-items: center;

`