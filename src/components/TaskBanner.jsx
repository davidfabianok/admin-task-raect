import React from 'react';

const TaskBanner = ({ userName, taskCount }) => {
  return (
    <h4 className='bg-primary text-white text-center p-4'>
      {userName} Task App{' '}
      <span className='text-light font-weight-light'>
        ({taskCount} tasks to do)
      </span>
    </h4>
  );
};

export default TaskBanner;
