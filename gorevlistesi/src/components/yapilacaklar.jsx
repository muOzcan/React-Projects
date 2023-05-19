import React, { useState, useEffect } from "react";
import "../App.css"

function Todo({todo, index, bitirTodo, kaldirTodo}) {
  return (
    <div className="gorevAlanı"
        style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <p className="gorevIcerik">{todo.gorev}</p>
        <div>
            <button className="tamamlaButonu" onClick={() => bitirTodo(index)}>
                {todo.isCompleted ? "Tamamlandi" : "Tamamla"}        
            </button>
            <button onClick={()=> kaldirTodo(index)}>x</button>
        </div>
    </div>
  )
}

export default Todo;
