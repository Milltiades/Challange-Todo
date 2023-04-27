import React from 'react'
import styled from 'styled-components'

export default function LoginComponent() {
  return (
    <Login>
        <H1>Get Started</H1>
        <P>add a photo</P>
        <Add>
            <img src="/assets/add_photo.svg" alt="" />
        </Add>
        <form action="">
       <Label>
         fill in your name
        <Input type="text" placeholder='your name'/>
        <Button>Sign in</Button>
       </Label>
       </form>
    </Login>
  )
}


const Login = styled.div`
width: 100%;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
height: 100%;
text-align: center;
border-radius: 4px;
padding: 33px 24px 63px 24px;
@media (min-width: 588px){
    padding: 33px 50px 63px 51px;
    width: 36.75rem;
}
  
`
const Label = styled.label`
    font-size: 1.375rem;
    line-height: 33px;
    display: flex;
    flex-direction: column;
    font-weight: light;
`

const H1 = styled.h1`
font-size: 3rem;
   
`

const P = styled.p`
    margin-top: 2.75rem;
    font-size: 1.375rem;
    font-weight: light;
`

const Add = styled.button`
    width: 7.625rem;
    height: 7.625rem;
    border-radius: 50%;
    background: #E6EBFF;
    margin: 0.625rem auto 3.3125rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        background: #5EFC8D
    }
`

const Input = styled.input`
    margin-top: 1rem;
    border-radius: 4px;
    background-color:#E6EBFF;
    border: none;
    padding: 1.4375rem 0 1.375rem 24px;
    font-size: 1.375rem;
    /* height: 4.75rem; */
    ::placeholder {

        opacity: 0.2;
    }
`

const Button = styled.button`
    margin-top: 4.75rem;
    background: #5EFC8D;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    padding: 0.6875rem 0 0.625rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    :hover{
background: black;
color: white;
    }
`