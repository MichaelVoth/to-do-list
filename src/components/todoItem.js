import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) { // Destructure the props object
    return (
        <div className='flex'>

            <li style={{
                textDecoration: todo.completed ? "line-through" : null // If the todoItem object is completed, add a line-through style
            }}>
                {todo.task}
            </li>
            <div>
                <div className='flex'>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}// Pass the id of the todoItem object to toggleComplete
                    />
                    <p>Completed:</p>
                </div>
                <button onClick={() => removeTodo(todo.id)}// Pass the id of the todoItem object to removeTodo
                >Delete</button>
            </div>
        </div>
    );
}

export default TodoItem;
