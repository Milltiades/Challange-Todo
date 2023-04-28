
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function StarterComponent() {
    const navigate = useNavigate();
  return (
    <Starter>
        <img src="/assets/starterLogo.svg" alt="" />
        <H1Start>Keep Track Of Daily Tasks In Life</H1Start>
        <ButtonStart onClick={() => navigate('login')}>Get Started</ButtonStart>
    </Starter>
  )
}


const Starter = styled.div`
margin-top: 4.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
   
`
const ButtonStart = styled.button`
    margin-top: 5rem;
    background: #5EFC8D;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    padding: 0.6875rem 3.6875rem 0.625rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    :hover{
background: black;
color: white;
    }
    @media (min-width: 595px){
        margin-top: 160px;
    }
`
const H1Start = styled.h1`
    margin-top: 2.875rem;
    font-size: 3rem;
`