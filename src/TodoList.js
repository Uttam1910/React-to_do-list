import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      status: 'Pending',
    };
    setTodos([...todos, newTodo]);
  };

  const updateStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, status: todo.status === 'Pending' ? 'Completed' : 'Pending' }
          : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      <div className="todos">
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            updateStatus={updateStatus}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
