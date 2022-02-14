import styled, { keyframes, css } from 'styled-components';
import lightCharacter from '../../public/images/spriteImageDarkmode.png';
import darkCharacter from '../../public/images/spriteImagelightmode.png';

const RaceContainer = styled.div`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  padding: 16px 65px 16px 24px;
`;

const DevWrapper = styled.div`
  position: relative;
  margin-left: 91px;
`;

const DinoWrapper = styled.div`
  position: relative;
`;

const devAnimation = keyframes`
  0% { 
    background: url(${lightCharacter}) no-repeat left center;
    background-position: -344px; 
    background-size: 513px 58px;
  }
  100% { 
    background: url(${lightCharacter}) no-repeat left center;
    background-size: 513px 58px;
    background-position: -508px; 
    }
`;

const devfever = keyframes`
  0% {
    background: url(${lightCharacter}) no-repeat left center;
    background-position: -344px; 
    background-size: 513px 58px;
  }

  100% {
    background: url(${darkCharacter}) no-repeat left center;
    background-position: -508px; 
    background-size: 513px 58px;
  }
`;

const dinoAnimation = keyframes`
  0% { 
    background: url(${lightCharacter}) no-repeat left center;
    background-size: 513px 58px;
    background-position: -45px; 
  }
  100% { 
    background: url(${lightCharacter}) no-repeat left center;
    background-size: 513px 58px;
    background-position: -135px; 
  }
`;

const dinofever = keyframes`
  0% {
    background: url(${lightCharacter}) no-repeat left center;
    background-position: -45px; 
    background-size: 513px 58px;
  }

  100% {
    background: url(${darkCharacter}) no-repeat left center;
    background-size: 513px 58px;
    background-position: -135px; 
  }
`;

const fireAnimation = keyframes`
  0% {     
    background: url(${lightCharacter}) no-repeat left center;
    background-size: 513px 58px;
    background-position: -180px; }
  100% { 
    background: url(${lightCharacter}) no-repeat left center;
    background-size: 513px 58px;
    background-position: -340px; }
`;

const firefever = keyframes`
  0% {
    background: url(${lightCharacter}) no-repeat left center;
    background-position: -180px; 
    background-size: 513px 58px;
  }

  100% {
    background: url(${darkCharacter}) no-repeat left center;
    background-size: 513px 58px;
    background-position: -340px; 
  }
`;

const Dev = styled.div`
  position: absolute;
  left: ${(props) => `${props.position}%`};
  width: 41px;
  height: 58px;
  animation: ${(props) =>
    props.isFever
      ? css`
          ${devfever} 0.6s steps(4) infinite
        `
      : css`
          ${devAnimation} 0.6s steps(4) infinite
        `};
  ${(props) =>
    props.isDead &&
    css`
      transition: 1s;
      animation-play-state: paused;
      opacity: 30%;
    `}
`;

const Dino = styled.div`
  position: absolute;
  left: ${(props) => `${props.position || 0}%`};
  width: 45px;
  height: 58px;

  animation: ${(props) =>
    props.isFever
      ? css`
          ${dinofever} 0.33s steps(2) infinite
        `
      : css`
          ${dinoAnimation} 0.33s steps(2) infinite
        `};

  &:after {
    content: '';
    display: ${(props) => (props.isFire ? 'block' : 'none')};
    width: 45px;
    height: 58px;
    position: relative;
    right: -100%;
    animation: ${(props) =>
      props.isFever
        ? css`
            ${firefever} 0.7s steps(4) infinite
          `
        : css`
            ${fireAnimation} .7s steps(4) infinite
          `};
  }
`;

export default {
  RaceContainer,
  DinoWrapper,
  Dino,
  DevWrapper,
  Dev,
};
