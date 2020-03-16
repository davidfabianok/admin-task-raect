import React from 'react';

const TaskRow = ({ task, toggleTask }) => {
  const { taskName, done } = task;
  return (
    <tr>
      <td>{taskName}</td>
      <td>
        <input type='checkbox' checked={done} onChange={() => toggleTask(task)} />
      </td>
    </tr>
  );
};

export default TaskRow;
