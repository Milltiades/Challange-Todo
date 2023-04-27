import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function TaskComponent() {
  const [done, setDone] = useState(null);
  const [addTask, setAddTask] = useState<any>([
    "Homework",
    "Grocery Shopping",
    "Homework",
    "Grocery Shopping",
  ]);
  const [inputValue, setInputValue] = useState<any>("");
  const changeColor = (index:any) => {
        setDone(index)
  }
  const { handleSubmit, register, getValues } = useForm<any>();

  const handleCHange = (e: any) => {
    setInputValue(e.target.value);
  };
  const onSubmit = () => {
   
      setAddTask([...addTask, inputValue]);
      console.log(getValues("task"));
    
  };
  
  const removeTask = (index: any) => {
    const newArray = [...addTask];
    newArray.splice(index, 1);
    setAddTask(newArray);
  };
  return (
    <Main>
      <H1>Add Your Daily Tasks</H1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
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
      {addTask.map((item: any, index: any) => {
        return (
          <Task key={index} background={done === index ? "#EDEDED" : "black"}>
            <p>{item}</p>
            <TaskBTN>
              <IconBtn onClick={() => changeColor(index)}>
                <Icon src="/assets/doneT.svg" alt="" />
              </IconBtn>
              <IconBtn onClick={() => removeTask(index)}>
                <Icon src="/assets/remove.svg" alt="" />
              </IconBtn>
            </TaskBTN>
          </Task>
        );
      })}
    </Main>
  );
}
const IconBtn = styled.button`
  margin-left: 29px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
const Icon = styled.img``;
const Task = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: ${(props) => props.background};
  color: white;
  align-items: center;
  margin-bottom: 16px;
  padding: 11.5px 11.7px 11.5px 24px;
  border-radius: 4px;
`;
const TaskBTN = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
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
`;
