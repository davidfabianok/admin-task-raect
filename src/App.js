import React, { useState, useEffect } from 'react';
import TaskRow from './components/TaskRow';
import TaskBanner from './components/TaskBanner';
import TaskCreator from './components/TaskCreator';
import VisibilityControl from './components/VisibilityControl';

const App = () => {
  const [userName, setUserName] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem('tasks');

    if (data !== null) {
      setTaskItems(JSON.parse(data));
    } else {
      setTaskItems([
        { taskName: 'One Task example', done: false },
        { taskName: 'Twho Task example', done: true },
        { taskName: 'Tree Task example', done: false }
      ]);
    }
    setUserName('David Fabian');
    setShowCompleted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems]);

  const toggleTask = task => {
    setTaskItems(
      taskItems.map(t =>
        t.taskName === task.taskName ? { ...task, done: !task.done } : t
      )
    );
  };

  const taskTableRows = doneValue =>
    taskItems
      .filter(task => task.done === doneValue)
      .slice(0)
      .reverse()
      .map(task => (
        <TaskRow key={task.taskName} task={task} toggleTask={toggleTask} />
      ));

  const taskCount = () => {
    return taskItems.filter(task => !task.done).length;
  };

  const addNewTask = taskName => {
    if (
      taskName.trim() !== '' &&
      !taskItems.find(task => task.taskName === taskName)
    ) {
      setTaskItems([...taskItems, { taskName, done: false }]);
    }
  };

  const handleShowCompleted = showCompleted => {
    setShowCompleted(showCompleted);
  };

  return (
    <>
      <TaskBanner userName={userName} taskCount={taskCount(taskItems)} />
      <div className='container'>
        <TaskCreator addNewTask={addNewTask} />
        {taskItems.filter(task => !task.done).length !== 0 && (
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th>Descripcion</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{taskTableRows(false)}</tbody>
          </table>
        )}
        <div className='bg-secondary text-white text-center p-2'>
          <VisibilityControl
            isChecked={showCompleted}
            handleShowCompleted={handleShowCompleted}
            description={'Completed Task'}
          />
          {showCompleted && taskItems.filter(task => task.done).length !== 0 && (
            <table className='table table-striped table-bordered table-dark my-2'>
              <thead>
                <tr>
                  <th>Descripcion</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>{taskTableRows(true)}</tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
