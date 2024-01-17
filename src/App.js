import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskList from './components/TaskList';
import AddTask from './components/AddList';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    }
    return true;
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>React Task Tracker</h1>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <div className="task-container">
          <div>
            <label>
              Filter:
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
              </select>
            </label>
          </div>
          <TaskList tasks={filteredTasks} setTasks={setTasks} />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
