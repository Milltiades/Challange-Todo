import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function Test2() {
    const { handleSubmit, register } = useForm<any>();
    const [inputValue, setInputValue] = useState<any>("");
    const [arr, setArr] = useState<any>([
      {
        value: "work 1",
        workDone: false,
      },
      {
        value: "work 2",
        workDone: false,
      },
      {
        value: "work 3",
        workDone: false,
      },
      {
        value: "work 4",
        workDone: false,
      },
    ]);
  const [newArray, setNewArray] = useState([...arr]);
    const handleCHange = (e: any) => {
      setInputValue({
        
        value: e.target.value,
        workDone: false,
      });
    };
    const addFunc = () => {
      setArr([...arr, inputValue]);
    };
    const removeFunc = (index: any) => {
      const newArr = [...arr];
      newArr.splice(index, 1);
      setArr(newArr);
    };
  
    const changeColor = (index: any) => {
      console.log(arr[index].workDone)
     arr[index].workDone = true;
     setNewArray([...arr]);
      
     
    };
    
   useEffect(() => {
      
     
       localStorage.setItem("arr", JSON.stringify(arr))
  
    //    const arrLocal = JSON.parse(localStorage.getItem("arr"));
    //    console.log(arrLocal)
    //    setNewArray(arrLocal)
   }, [arr]);
  

  
///////////
//   const [taskColorIndex, setTaskColorIndex] = useState(-1)
//   const [addTask, setAddTask] = useState<any>([
//     "Homework",
//     "Grocery Shopping",
//     "Homework",
//     "Grocery Shopping",
//   ]);
 
//   const [inputValue, setInputValue] = useState<any>("");

//   const { handleSubmit, register, getValues } = useForm<any>();

//   const handleCHange = (e: any) => {
//     setInputValue(e.target.value);
//   };
//   const onSubmit = () => {
   
//       setAddTask([...addTask, inputValue]);
//       console.log(getValues("task"));
    
//   };
  
//   const removeTask = (index: any) => {
//     const newArray = [...addTask];
//     newArray.splice(index, 1);
//     setAddTask(newArray);
   
//   };

//   const doneTask = (index: any) => {
//     console.log('index: ', index);
//     setTaskColorIndex(index);
//     console.log("taskColorIndex: ", taskColorIndex);

//   }

//   useEffect(() => {
//    localStorage.setItem('taskArray', addTask)
//   },[addTask])
  
  return (
    <Main>
      <LoginMain>
      <H1>Add Your Daily Tasks</H1>
      <form action="" onSubmit={handleSubmit(addFunc)}>
        <Label htmlFor="">
          <Input
            type="text"
            placeholder="my task"
            {...register("task")}
            required
            onChange={handleCHange}
          />
          <Button>Add</Button>
        </Label>
      </form>
      {newArray.map((item: any, index: any) => {
        return (
          <Task key={index} background={newArray[index].workDone ? "#E6EBFF" : "black"}>
            <p>{item}</p>
            <TaskBTN>
              <IconBtnDone onClick={() => changeColor(index)}>
                <img src="/assets/doneT.svg" alt="" />
              </IconBtnDone>
              <IconBtnRemove onClick={() => removeFunc(index)}>
                <img src="/assets/remove.svg" alt="" />
              </IconBtnRemove>
            </TaskBTN>
          </Task>
        );
      })}
      </LoginMain>
    </Main>
  );
}

const LoginMain = styled.div`
   @media (min-width: 588px){
    width: 36.75rem;
    margin: 35px auto;
  }
`

const IconBtnDone = styled.button`
  /* margin-left: 29px; */
  border: none;
  background: transparent;
width: 50px;
height: 100%;
border-radius: 4px;
  cursor: pointer;
  :hover{
    background: #5EFC8D;
  }
  
`;

const IconBtnRemove = styled(IconBtnDone)`
 :hover{
    background: red;
  }
`

const Task = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: ${(props) => props.background};
  color: white;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 0 0 24px;
  border-radius: 4px;
  height: 54px;
  
`;
const TaskBTN = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
 height: 100%;
  
`;

const Main = styled.div`
  width: 100%;
  height: calc(100vh - 98px);
  background: white;
  text-align: center;
  padding: 0 24px;
  color: white;
 
`;
const Button = styled.button`
  background: #5efc8d;
  border: none;
  border-radius: 4px;
  padding: 1rem 1.375rem;
  color: black;
  font-size: 1.7rem;
  cursor: pointer;
  :hover{
    background: black;
    color: white;
  }
`;

const Input = styled.input`
  width: calc(100% - 100px);
  border: none;
  border-radius: 4px;
  background: #e6ebff;
  color: black;
  font-size: 1.175rem;
  padding: 1.375rem 0 1.375rem 1.5rem;
  ::placeholder {
    opacity: 0.2;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.7rem;
  margin-bottom: 3.1875rem;
  width: 100%;
`;

const H1 = styled.h1`
  font-size: 1.7rem;
  margin-top: 2.2rem;
  color: black;
  @media (min-width: 588px){
    font-size: 42px;
  }
`;
