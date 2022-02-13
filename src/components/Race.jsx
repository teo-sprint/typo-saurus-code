import React from 'react';
import Styled from './Race.styled';

function Race({ dinoPosition, devPosition, isFire = false, isDead = false, isFever = false }) {
  return (
    <Styled.RaceContainer>
      <Styled.DinoWrapper>
        <Styled.Dino position={dinoPosition} isFire={isFire} isFever={isFever} />
      </Styled.DinoWrapper>
      <Styled.DevWrapper>
        <Styled.Dev position={devPosition} isDead={false} isFever={isFever} />
      </Styled.DevWrapper>
    </Styled.RaceContainer>
  );
}

export default Race;
