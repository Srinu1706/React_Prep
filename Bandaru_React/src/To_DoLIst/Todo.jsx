import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const removetodo = (todoToRemove) => {
    const updatedList = todoList.filter((item) => item !== todoToRemove);
    setTodoList(updatedList);
  };
  return (
    <div>
      <input type="text" value={todo} onChange={handleInputChange} />
      <button
        onClick={() => {
          setTodoList([...todoList, todo]);
          setTodo("")
        }}
      >
        Add to do
      </button>
      {
      
      todoList.map((todoItem,index) => (
        <div key={index}>
          <p>{todoItem}</p>
          <button onClick={() => removetodo(todoItem)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
