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

const EditorContainer = styled.div`
  white-space: pre-line;
  width: 800px;
  height: 520px;
  box-sizing: border-box;
  padding-right: 4px;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: rgba(255, 255, 255, 0);
    padding-right: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const FirstLine = styled.div`
  width: 800px;
  height: 24px;
`;

const blinking = keyframes`
  0% { opacity: 0.1; }
  50% { opacity: 1; }
  100% { opacity: 0.1; }
`;

const TextLine = styled.span`
  color: rgb(255, 255, 255, 0.3);

  &.false {
    color: rgba(209, 0, 0);
  }

  &.pass {
    color: rgba(255, 255, 255);
  }

  &.cursor {
    background-color: darkgray;
    animation: ${blinking} 1.2s linear infinite;
  }
  ${(props) =>
    props.isFever
      ? css`
          animation: ${fever} 0.5s ease-in-out infinite;
        `
      : 'none;'};
`;

export default {
  EditorContainer,
  FirstLine,
  TextLine,
};
