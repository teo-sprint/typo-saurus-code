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

`


const EditorContainer = styled.div`
  white-space: pre-line;
  background-color: rgba(36, 40, 53, 1);
  padding-top: 24px;
  width: 800px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  ${props => (props.isFever ? css`animation: ${fever} .5s ease-in-out infinite` : "none;")};
  `;



const blinking = keyframes`
  0% { opacity: 0.1; }
  50% { opacity: 1; }
  100% { opacity: 0.1; }
`;




const TextLine = styled.span`
color: rgb(255, 255, 255, 0.3);

  &.false{
  color: rgba(209, 0, 0)
}

  &.pass{
  color: rgba(255, 255, 255);
}

  &.cursor{
  background - color : darkgray;
  animation: ${blinking} 1.2s linear infinite;
}
${props => (props.isFever ? css`animation: ${fever} .5s ease-in-out infinite` : "none;")};

`;





export default {
  EditorContainer,
  TextLine,
};
