

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

export default function LoginComponent() {
  
    const navigate= useNavigate();
    const { register, getValues, handleSubmit } = useForm();
    const handleUpload = (e:any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e:any) => {
          localStorage.setItem('myPhoto', e.target.result);
       
        };
    
        reader.readAsDataURL(file);
    }
    const onSubmit = () => {
        console.log(getValues("name"));
        navigate("/user");
        localStorage.setItem("name", getValues("name"));

    }
  return (
    <Div>
    <Login  >
        <H1>Get Started</H1>
        <P>add a photo</P>
        {/* <Add>
            <img src="/assets/add_photo.svg" alt="" />
        </Add> */}
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Add htmlFor="" onChange={handleUpload}>
        <Img src="/assets/add_photo.svg" alt="" />
            <AddInput type="file" {...register("photo")} required/>
        </Add>
        
       <Label>
         fill in your name
        <Input type="text" placeholder='your name'{...register("name")} required/>
        <Button>Sign in</Button>
       </Label>
       </form>
    </Login>
   
    </Div>
  )
}

const Div = styled.div`
    padding: 2.5rem 1.25rem;
`


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



const Add = styled.label`
     width: 7.625rem;
     height: 7.625rem;
     border-radius: 50%;
     background: #E6EBFF;
     margin: 0.625rem auto 3.3125rem;
     border: none;
     display: flex;
     justify-content: center;
     align-items: center;
     position: relative;
     :hover {
         background: #5EFC8D
    }
`
const Img = styled.img`
    position: absolute;
`
const AddInput = styled.input`
    opacity: 0;
    width: 7.625rem;
     height: 7.625rem;
     cursor: pointer;
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