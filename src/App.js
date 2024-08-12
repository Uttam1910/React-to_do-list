import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Initialize state from local storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Update local storage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const task = {
      id: Date.now(),
      title: newTask,
      status: 'Pending'
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const updateTaskStatus = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>To-Do List</h1>
      </header>
      <div className="todo-list">
        <form onSubmit={addTask}>
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <div className="todos">
          {tasks.map((task, index) => (
            <div key={task.id} className="todo-item">
              <h3>{index + 1}. {task.title}</h3>
              <p>Status: {task.status}</p>
              <button onClick={() => updateTaskStatus(task.id)}>Update Status</button>
              <button onClick={() => removeTask(task.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
