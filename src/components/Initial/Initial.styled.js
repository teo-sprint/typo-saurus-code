import styled, { css, keyframes } from 'styled-components';

const showAnimation = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const delay = ({ delay }) => css`
  animation: 1s linear ${showAnimation};
  animation-delay: ${delay}s;
  animation-fill-mode: both;
`;

const InitialContainer = styled.div`
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .pressBtn {
    font-family: D2Coding;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    color: #fff;
    animation: 1.5s infinite blink;
  }
`;
const PressWrapper = styled.div`
  ${delay}
`;

const RaceWrapper = styled.div`
  position: relative;
  margin-top: 123px;
  ${delay}
`;

export default { InitialContainer, PressWrapper, RaceWrapper };
