import React from 'react';

function App() {
  const todoList = [
    { id: 1, title: "Complete assignment 1" },
    { id: 2, title: "Study for exam" },
    { id: 3, title: "Go for a run" }
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;