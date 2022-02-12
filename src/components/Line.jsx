import React, { useEffect, useState } from 'react';
import './Line.css';

export const Line = ({ code }) => {
  const line = code.filter((el) => el.value === '\n').length + 1;
  const arr = [];
  for (let i = 1; i <= line; i++) {
    arr.push(i);
  }

  return (
    <div className='line-box'>
      {arr.map((el, idx) => (
        <div key={idx}>{el}</div>
      ))}
    </div>
  );
};
