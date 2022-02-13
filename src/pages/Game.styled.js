import styled, { css, keyframes } from 'styled-components';

const fever = keyframes`
  0% {
    background-color: rgba(36, 40, 53, 1);
    color : rgba(255, 255, 255, 0.3);
  }

  50% {
    background-color: rgba(255, 255, 255, 1);
    color : rgba(0, 0, 0, 0.3)
  }

  100% {
    background-color: rgba(36, 40, 53, 1);
    color : rgba(255, 255, 255, 0.3);
  }

`;

const GameContainer = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  background-color: rgba(36, 40, 53, 1);
  ${(props) =>
    props.isFever
      ? css`
          animation: ${fever} 0.5s ease-in-out infinite;
        `
      : 'none;'};
`;

const ComboLine = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  color: rgba(94, 248, 0, 1);
`;

export default {
  GameContainer,
  ComboLine,
};
