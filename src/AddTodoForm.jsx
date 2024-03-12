import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    onAddTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        name="title" 
        placeholder="Enter todo title" 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;