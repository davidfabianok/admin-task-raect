import React, { useState } from 'react';

const TaskCreator = ({ addNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('');
  const handleNewTaskName = event => setNewTaskName(event.target.value);
  const addNewTaskName = () => {
    addNewTask(newTaskName);
    setNewTaskName('');
  };
  return (
    <div className='my-1'>
      <input
        type='text'
        className='form-control'
        value={newTaskName}
        onChange={handleNewTaskName}
      />
      <button
        type='button'
        className='btn btn-primary mt-1'
        onClick={addNewTaskName}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskCreator;
