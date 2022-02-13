import styled, { css, keyframes } from 'styled-components';

const LineContainer = styled.div`
  text-align: right;
  padding-left: 24px;
  box-sizing: content-box;
  margin-right: 12px;
`;

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

const LineNum = styled.div`
  color: rgba(255, 255, 255, 0.3);
  ${(props) =>
    props.isFever
      ? css`
          animation: ${fever} 0.5s ease-in-out infinite;
        `
      : 'none;'};
`;

export default {
  LineContainer,
  LineNum,
};
