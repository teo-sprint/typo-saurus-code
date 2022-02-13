import React from 'react';

export const Line = ({ code }) => {
  const line = code.filter((el) => el.value === '\n').length + 1;
  const arr = [];
  for (let i = 1; i <= line; i++) {
    arr.push(i);
  }

  return (
    <div className='flex flex-col	pl-6 box-content mr-3'>
      {arr.map((el, idx) => (
        <div key={idx} className='text-grey-600-dark'>
          {el}
        </div>
      ))}
    </div>
  );
};
