import './App.css';
import React,{useState} from 'react';
import Form from "./components/form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText,setinputText]= useState("");
  const [todos,setTodos]=useState([]);  
  return (
    <div className="App">
      <header>
    <h5>To Do List</h5>

      </header>
      <Form inputText={inputText} setTodos={setTodos} todos={todos} setinputText={setinputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
      
    </div>
  );
}

export default App;
