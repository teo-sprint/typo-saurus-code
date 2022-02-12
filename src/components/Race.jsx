import React from 'react';
import Styled from './Race.styled';

function Race({ dinoPosition, devPosition }) {
  return (
    <Styled.RaceContainer>
      <Styled.Wrapper>
        <Styled.Dino position={dinoPosition} isDark={true} fire={true} />
        <Styled.Dev position={devPosition} isDark={true} isDead={true} />
      </Styled.Wrapper>
    </Styled.RaceContainer>
  );
}

export default Race;
