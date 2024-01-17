import React, { useState } from 'react';

const AddTask = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    const task = { id: tasks.length + 1, name: newTask, dateAdded: new Date().toLocaleDateString(), completed: false };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
