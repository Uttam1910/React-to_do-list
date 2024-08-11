import React from 'react';

const TodoItem = ({ todo, index, updateStatus, removeTodo }) => {
  return (
    <div className="todo-item">
      <h3>{index + 1}. {todo.title}</h3>
      <p>Status: {todo.status}</p>
      <button onClick={() => updateStatus(todo.id)}>
        {todo.status === 'Pending' ? 'Mark as Completed' : 'Mark as Pending'}
      </button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default TodoItem;
