import React, { useState, useEffect } from "react";
import "../App.css"

function GorevEkle({addTodo}) {
    const [value,setValue] = useState("");
    const enterTusuSabitle = (a) => {
        a.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    }

    const enterTusu =(a)=>{
        if (a.key === "Enter"){
            enterTusuSabitle(a);
        }
    }

  return (
    <div className="divGorevEkle">
        <input 
            type='text' 
            className='input'
            value={value}
            onChange={(a)=>setValue(a.target.value)}
            onKeyUp={enterTusu}
        />
        <button onClick={enterTusuSabitle}> Gorev Ekle</button>       
    </div>
  );
}

export default GorevEkle;
