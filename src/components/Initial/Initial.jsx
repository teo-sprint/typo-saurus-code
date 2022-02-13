import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Styled from './Initial.styled';
import RaceStyled from '../Race.styled.js';
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
      <Styled.PressWrapper delay={2}>
        <div className='pressBtn'>Press Space</div>
      </Styled.PressWrapper>
      <Styled.RaceWrapper delay={4}>
        <RaceStyled.Dino position={35} isDark={true} isFire={true} />
        <RaceStyled.Dev position={60} isDark={true} isDead={false} />
      </Styled.RaceWrapper>
    </Styled.InitialContainer>
  );
}

export default Initial;
