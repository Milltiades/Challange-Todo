import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function TaskComponent({isDay} : {isDay:boolean}) {
  interface Task {
    value: string;
    isDone: boolean;
  }

  const [addTask, setAddTask] = useState<Task[] | any>([
    { value: "Homework", isDone: false },
    { value: "Grocery Shopping", isDone: false },
    { value: "Homework", isDone: false },
    { value: "Grocery Shopping", isDone: false },
  ]);

  const [newArray, setNewArray] = useState<any>([...addTask]);

  const [inputValue, setInputValue] = useState<any>("");

  const { handleSubmit, register, reset } = useForm<any>();

  const handleCHange = (e: any) => {
    setInputValue({ value: e.target.value, isDone: false });
  };
  const onSubmit = () => {
    setAddTask([...addTask, inputValue]);
    reset();
  };

  const removeTask = (index: any) => {
    const newArr = [...addTask];
    newArr.splice(index, 1);
    setAddTask(newArr);
  };

  const doneTask = (index: any) => {
    addTask[index].isDone = true;
    setNewArray([...addTask]);
  };

  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(addTask));
    
    setNewArray(addTask);
  }, [addTask]);
  

  return (
    <Main background={isDay ? "white" : "#d8d1d12c"}>
      <LoginMain>
        <H1 color={isDay? "black": "white"}>Add Your Daily Tasks</H1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="">
            <Input
            background = {isDay? "#e6ebff" : "#8f8a8a40"}
              type="text"
              placeholder="my task"
              {...register("task")}
              required
              onChange={handleCHange}
            />
            <Button background ={isDay? "#5efc8d" : "#5bb578"}>Add</Button>
          </Label>
        </form>
        {newArray.map((item: any, index: any) => {
          return (
            <Task key={index} background={item.isDone ? "#E6EBFF" : "black"}>
              <P>{item.value}</P>
              <TaskBTN>
                <IconBtnDone onClick={() => doneTask(index)}>
                  <img src="/assets/doneT.svg" alt="" />
                </IconBtnDone>
                <IconBtnRemove onClick={() => removeTask(index)}>
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
const P = styled.p`
  text-transform: capitalize;
  @media (min-width: 595px) {
    font-size: 1.375rem;
    font-weight: 300;
    line-height: 1.9375rem;
    
  }
`;

const LoginMain = styled.div`
  @media (min-width: 595px) {
    width: 595px;
    margin: 0 auto;
  }
`;

const IconBtnDone = styled.button`
  /* margin-left: 29px; */
  border: none;
  background: transparent;
  width: 50px;
  height: 100%;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background: #5efc8d;
  }
`;

const IconBtnRemove = styled(IconBtnDone)`
  :hover {
    background: red;
  }
`;

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

const Main = styled.div<any>`
  width: 100%;
  height: calc(100vh - 98px);
  background: ${(props) => props.background};
  text-align: center;
  padding: 0 24px;
  color: white;
`;
const Button = styled.button<any>`
  background: ${(props) => props.background};
  border: none;
  border-radius: 4px;
  padding: 1rem;
  color: black;
  font-size: 1.7rem;
  line-height: 2.34rem;

  cursor: pointer;
  :hover {
    background: black;
    color: white;
  }
  @media (min-width: 595px) {
    line-height: 2.8125rem;
    padding: 1rem 1.375rem 0.9375rem 1.375rem;
    font-size: 2rem;
  }
`;

const Input = styled.input<any>`
  width: calc(100% - 100px);
  border: none;
  border-radius: 4px;
  background: ${(props) => props.background};
  color: black;
  font-size: 1.175rem;
  padding: 1.2rem;
  line-height: 1.9375rem;
  font-weight: 300;
  text-transform: lowercase;
  ::placeholder {
    opacity: 0.2;
  }
  @media (min-width: 595px) {
    padding: 1.375rem 0 1.375rem 1.5rem;
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

const H1 = styled.h1<any>`
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 3.6875rem;
  margin-top: 2.1875rem;
  
  color: ${(props) => props.color};
  @media (min-width: 595px) {
    font-size: 2.625rem;
  }
`;
