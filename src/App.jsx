import { useRef, useState } from "react";
import { Navbar } from "./components/Navbar";
import { AnotherComponent } from "./components/AnotherComponent";

export const App = () => {

  let x = "Vijay";
  let array = ["user1", "user2", "user3"];

  let data = "boy";

  // Update the click count using UseState variable
  const [clickCount, setCount] = useState(0);

  //let clickCount = 0; // this was a normal variable which did update on the console log but not on the ui 
  //The UI (React Interface) only gets updated when the state is updated

  const BtnClick = () =>{
      console.log("Click me clicked");

      // Not useful as it only updated the normal variable
      //clickCount++;

      setCount(clickCount+1);
      console.log(clickCount);
  }

  const inputTextRef = useRef(null);
  const [arrInputText, setArrInputText] = useState([]);

  return (
    <div>
      {/* Navbar component is imported and used here */}
      <Navbar/>

      {/* variable x is used here */}
      {x}

      {/* array is used using map here */}
      {array.map((user, index)=>{
        return <h2 key={index}>{user}</h2>
      })}

      {/* Ternary operator is used here */}
      {data == "boy" ? <h1>Boy</h1> : <h1>Girl</h1>}

      {clickCount}
      <button onClick={() => {BtnClick()}}>Click me</button>

      {/* Props explained using this component in which we given a variable and function as props */}
      <AnotherComponent data = {clickCount} fn = {setCount}/>

      <input ref = {inputTextRef} type = "text" placeholder = "Enter your inputTextRef" />
      <button onClick={() =>
        {
          console.log(inputTextRef.current.value);
          setArrInputText([...arrInputText, inputTextRef.current.value]);
        }
      }>Click</button>

      {arrInputText.map((textInputItem, index) => {return <h2 key={index}>{textInputItem}</h2>})}

    </div>
  )
}

export default App