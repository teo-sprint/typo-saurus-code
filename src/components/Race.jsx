import React from 'react';
import Styled from './Race.styled';

function Race({ dinoPosition, devPosition, isFire = false, isDead = false, isDark = true }) {
  return (
    <Styled.RaceContainer>
      <Styled.DinoWrapper>
        <Styled.Dino position={dinoPosition} isDark={isDark} isFire={isFire} />
      </Styled.DinoWrapper>
      <Styled.DevWrapper>
        <Styled.Dev position={devPosition} isDark={isDark} isDead={isDead} />
      </Styled.DevWrapper>
    </Styled.RaceContainer>
  );
}

export default Race;
