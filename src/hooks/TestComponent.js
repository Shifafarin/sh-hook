import React, { useState } from "react";

export default function TestComponent() {
    const[text,setText]=useState('hi')
    const handleClick=()=>{
     setText('hello')
     console.log(text)   
    }
  return (
    <div>
      <button onClick={handleClick}>Please Click Here</button>
    </div>
  )
}