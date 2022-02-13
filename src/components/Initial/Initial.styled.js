import styled from 'styled-components';

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

const RaceWrapper = styled.div`
  position: relative;
  margin-top: 123px;
`;

export default { InitialContainer, RaceWrapper };
