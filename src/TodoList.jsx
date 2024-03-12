import React from 'react';
import TodoListItem from './TodoListItem';


const todoList = [
  { id: 1, title: "Complete assignment" },
  { id: 2, title: "Exam" },
  { id: 3, title: "Go for a run" }
];


const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;