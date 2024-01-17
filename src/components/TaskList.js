// TaskList.js
import React from 'react';
import TaskItem from './TaskItem';
import { useDrop } from 'react-dnd';

const ItemTypes = {
  TASK: 'task',
};

const TaskList = ({ tasks, setTasks }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = tasks.length;
      const updatedTasks = [...tasks];
      const [removedTask] = updatedTasks.splice(dragIndex, 1);
      updatedTasks.splice(hoverIndex, 0, removedTask);
      setTasks(updatedTasks);
    },
  });

  const handleToggleCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div ref={drop}>
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onToggleCompletion={handleToggleCompletion}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
