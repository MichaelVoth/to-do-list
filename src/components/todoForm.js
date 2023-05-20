import React, { useState } from 'react';

function TodoForm({ addTodo }) { 
    const [value, setValue] = useState(""); // The value of the input element

    const handleSubmit = (e) => { // Add a new todoItem object to the todos array
        e.preventDefault();
        if (!value) return; // If the value is empty, do nothing
        addTodo(value); // Pass the value of the input element to addTodo
        setValue(""); // Reset the value of the input element
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)} 
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;
