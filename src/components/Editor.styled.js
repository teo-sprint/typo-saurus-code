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

const endAnimation = keyframes`
  0%{
    background-position:0% 50%;
  }
  100%{
    background-position:100% 50%;
  }
`;

const EndLine = styled.div`
  padding: 0 0 52px 24px;
  background: linear-gradient(
    90deg,
    rgba(150, 48, 30, 1) 0%,
    rgba(199, 201, 88, 1) 10%,
    rgba(28, 147, 46, 1) 20%,
    rgba(74, 165, 168, 1) 30%,
    rgba(89, 90, 165, 1) 40%,
    rgba(84, 16, 67, 1) 50%,
    rgba(28, 58, 63, 1) 60%,
    rgba(82, 175, 183, 1) 70%,
    rgba(78, 170, 76, 1) 80%,
    rgba(150, 48, 30, 1) 90%,
    rgba(199, 201, 88, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 1000% 100%;
  display: inline;
  transform: translate(-50%, -50%);
  animation: ${endAnimation} 4s linear infinite;
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
  EndLine,
};
