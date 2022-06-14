import React from 'react';

const ErrorExample = () => {
  let title = "This is the title";
  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  }
  return (
    <div>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </div>
  );
};

export default ErrorExample;
