import './App.css';
import React, { useState } from 'react';
import TodoItem from './components/todoItem';
import TodoForm from './components/todoForm';


function App() {

  const [todos, setTodos] = useState([]); // Array of todoItem objects

  // Add a new todoItem object to the todos array
  const addTodo = (task) => { 
    const newTodos = [...todos, { id: todos.length, task: task, completed: false }]; // Create a new todoItem object
    setTodos(newTodos); 
  };

// Toggle the completed property of the todoItem object with the given id
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => // If the todoItem object id matches the given id, toggle the completed property
        todo.id === id ? { ...todo, completed: !todo.completed } : todo // Otherwise, return the todoItem object unchanged
      )
    );
  };

  // Remove the todoItem object with the given id from the todos array
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Return all todoItem objects whose id does not match the given id
  };

  return (
    <div className='App'>
      <h1>To Do List</h1>
      <div className='wrapper'>
        <div className='content'>
          <TodoForm addTodo={addTodo} // Pass the addTodo function to the TodoForm component
          /> 
          {todos.map((todo) => ( // Render a TodoItem component for each todoItem object in the todos array
            <TodoItem // Pass the todoItem object properties to the TodoItem component
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete} // Pass the toggleComplete function to the TodoItem component
              removeTodo={removeTodo} // Pass the removeTodo function to the TodoItem component
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;