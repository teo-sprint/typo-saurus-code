import React from 'react';
import Styled from './Race.styled';

function Race({ dinoPosition, devPosition }) {
  return (
    <Styled.RaceContainer>
      <Styled.Wrapper>
        <Styled.Dino position={dinoPosition} />
        <Styled.Dev position={devPosition} />
      </Styled.Wrapper>
    </Styled.RaceContainer>
  );
}

export default Race;
