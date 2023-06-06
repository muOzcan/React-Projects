import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from './components/yapilacaklar';
import GorevEkle from './components/gorevekleme';

function App() {
  const [kalanGorev, setkalanGorev] = useState(0);
  useEffect(()=>{
    setkalanGorev(yapilacaklar.filter((todo)=> !todo.isCompleted).length);
  })
  const [yapilacaklar, setYapilacaklar] = React.useState([
    {
      gorev: "Ödevi tamamla",
      isCompleted: false
    },
    {
      gorev: "Ders Çalış",
      isCompleted: false
    },
    {
      gorev: "Tekrar ders çalışmaya başlayana kadar sosyalleş",
      isCompleted: false
    }
  ]);

  const addTodo = (gorev)=>{
    const newTodos = [
      ...yapilacaklar,
      {gorev: gorev, isCompleted: false, btnText: "Complete"}
    ];
    setYapilacaklar(newTodos);
  };

  const bitirTodo = (index)=>{
    const newTodos = [...yapilacaklar];
    !newTodos[index].isCompleted
      ? (newTodos[index].btnText = "incomplete")
      : (newTodos[index].btnText = "Complete");
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setYapilacaklar(newTodos);
  };

  const kaldirTodo = (index)=>{
    const newTodos = [...yapilacaklar];
    newTodos.splice(index,1);
    setYapilacaklar(newTodos);
  };


  return (
    <div className="app">
      <div className="gorevlerListesi">
        <div className="kalanGorev">Kalan Gorev Sayisi({kalanGorev})</div>       
        {yapilacaklar.map((todo,index)=>(
          <Todo  
          key={index}
          index={index}
          todo={todo}
          bitirTodo={bitirTodo}
          kaldirTodo={kaldirTodo}>           
          </Todo>          
        ))}
        
        <GorevEkle addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
