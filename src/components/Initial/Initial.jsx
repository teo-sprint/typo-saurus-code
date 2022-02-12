import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Styled from './Initial.styled';
import TypoTitle from '../TypoTitle/TypoTitle.jsx';

function Initial() {
  const navigate = useNavigate();

  useEffect(() => {
    const onPressSpace = (e) => {
      if (e.keyCode === 32) {
        navigate('/game');
      }
    };
    document.body.addEventListener('keyup', onPressSpace);

    return () => {
      document.body.removeEventListener('keyup', onPressSpace);
    };
  }, []);

  return (
    <Styled.InitialContainer>
      <TypoTitle />
      <div className='pressBtn'>Press Space</div>
    </Styled.InitialContainer>
  );
}

export default Initial;
