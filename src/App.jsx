import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title
    };
    setTodos([...todos, newTodo]);
    setNewTodo(title);
  };

  return (
    <div>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <p>New Todo: {newTodo}</p>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;