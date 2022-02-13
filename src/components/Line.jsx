import React from 'react';
import Styled from './Line.styled';

export const Line = ({ code, isFever }) => {
  const line = code.filter((el) => el.value === '\n').length + 1;
  const arr = [];
  for (let i = 1; i <= line; i++) {
    arr.push(i);
  }

  return (
    <Styled.LineContainer>
      {arr.map((el, idx) => (
        <Styled.LineNum key={idx} isFever={isFever}>
          {el}
        </Styled.LineNum>
      ))}
    </Styled.LineContainer>
  );
};
