import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  TASK: 'task',
};

const TaskItem = ({ task, index, onToggleCompletion, onDelete }) => {
  const [, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { index },
  });

  return (
    <div ref={drag} style={{ cursor: 'move' }}>
      {task.name} - {task.dateAdded} - {task.completed ? 'Completed' : 'Incomplete'}
      <button onClick={() => onToggleCompletion(task.id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
