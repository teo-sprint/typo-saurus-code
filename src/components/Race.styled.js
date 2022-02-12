import styled, { keyframes } from 'styled-components';
import lightImage from '../../public/images/spriteImageDarkmode.png';
import darkImage from '../../public/images/spriteImagelightmode.png';

const RaceContainer = styled.div`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  padding: 16px 24px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const dinoAnimation = keyframes`
  0% { background-position: -45px; }
  100% { background-position: -135px; }
`;

const fireAnimation = keyframes`
  0% { background-position: -180px; }
  100% { background-position: -340px; }
`;

const Dino = styled.div`
  position: absolute;
  left: ${(props) => `${props.position || 0}%`};
  width: 45px;
  height: 58px;
  background: url(${(props) => `${props.isDark ? lightImage : darkImage}`}) no-repeat left center;
  background-size: 513px 58px;
  animation: ${dinoAnimation} 0.4s steps(2) infinite;

  &:after {
    content: '';
    display: ${(props) => (props.fire ? 'block' : 'none')};
    width: 45px;
    height: 58px;
    position: relative;
    right: -110%;
    background: url(${(props) => `${props.isDark ? lightImage : darkImage}`}) no-repeat left center;
    background-size: 513px 58px;
    animation: ${fireAnimation} 0.7s steps(4) infinite;
  }
`;

const devAnimation = keyframes`
  0% { background-position: -344px; }
  100% { background-position: -508px; }
`;

const Dev = styled.div`
  position: absolute;
  left: ${(props) => `${props.position || 12}%`};
  width: 41px;
  height: 58px;
  background: url(${(props) => `${props.isDark ? lightImage : darkImage}`}) no-repeat left center;
  background-size: 513px 53px;
  animation: ${devAnimation} 0.6s steps(4) infinite;
  transition: 1s;
  ${(props) =>
    props.isDead &&
    `
    animation-play-state: paused ;
    opacity:30%;
  `}
`;

export default {
  RaceContainer,
  Wrapper,
  Dino,
  Dev,
};
