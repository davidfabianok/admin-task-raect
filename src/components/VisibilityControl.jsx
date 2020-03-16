import React from 'react';

const VisibilityControl = ({ isChecked, handleShowCompleted, description }) => {
  return (
    <div className='form-check'>
      <input
        type='checkbox'
        className='form-check-input'
        checked={isChecked}
        onChange={e => handleShowCompleted(e.target.checked)}
      />
      <label htmlFor='form-check-label'>Show {description}</label>
    </div>
  );
};

export default VisibilityControl;
