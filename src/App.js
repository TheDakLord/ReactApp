import React from "react";
import New from "./Components/new";
import './Components/style.css';
import NewYear from "./state1/New";
import Button from "./UI/MyInput";

function App() {
  const app=['mine','yours','his','merin']
  return (
    <>
    
     <New /> 
     <NewYear/>
     <Button type='text' placeholder='Название:' />
     {app.map((items)=><p>{items}</p>)}
    </>
  );
}

export default App;
