// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// export default function test() {

//   const [inputValue, setInputValue] = useState<any>("");
//   const [arr, setArr] = useState<any>([
//     {
//       value: "work 1",
//       workDone: false,
//     },
//     {
//       value: "work 2",
//       workDone: false,
//     },
//     {
//       value: "work 3",
//       workDone: false,
//     },
//     {
//       value: "work 4",
//       workDone: false,
//     },
//   ]);
// const [newArray, setNewArray] = useState([...arr]);
//   const handleCHange = (e: any) => {
//     setInputValue({
      
//       value: e.target.value,
//       workDone: false,
//     });
//   };
//   const addFunc = () => {
//     setArr([...arr, inputValue]);
//   };
//   const removeFunc = (index: any) => {
//     const newArr = [...arr];
//     newArr.splice(index, 1);
//     setArr(newArr);
//   };

//   const changeColor = (index: any) => {
//     console.log(arr[index].workDone)
//    arr[index].workDone = true;
//    setNewArray([...arr]);
    
   
//   };
  
//  useEffect(() => {
//      localStorage.setItem("arr", JSON.stringify(arr))
//      const arrLocal = JSON.parse(localStorage.getItem("arr"));
//      console.log(arrLocal)
//      setNewArray(arrLocal)
//  }, [arr]);

 

//   return (
//     <Div>
//       <input type="text" onChange={handleCHange} />
//       <button onClick={() => addFunc()}>click me</button>
//       {newArray.map((item:any, index:any) => {
//         return (
//           <Task
//             key={index}
//             background={ item.workDone ? "red" : "blue"}
//           >
//             {item.value}
//             <>
//               <button onClick={() => changeColor(index)}>done</button>
//               <button onClick={() => removeFunc(index)}>remove</button>
//             </>
//           </Task>
//         );
//       })}
//     </Div>
//   );
// }

// const Div = styled.div`
//   width: 100%;
//   height: 100%;
//   background: white;
// `;

// const Task = styled.div<any>`
//   width: 200px;
//   height: 30px;
//   background: ${(props) => props.background};
//   color: white;
//   display: flex;
//   justify-content: space-between;
// `;



