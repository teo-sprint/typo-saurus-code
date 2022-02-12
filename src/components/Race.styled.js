import styled, { keyframes } from 'styled-components';
import lightImage from '../../public/images/spriteImageLight.png';
import darkImage from '../../public/images/spriteImageDark.png';

const RaceContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  padding: 24px 26px;
`;

const Wrapper = styled.div`
  position: relative;
`;

const dinoAnimation = keyframes`
  0% { background-position: -45px; }
  100% { background-position: -135px; }
`;

const Dino = styled.div`
  position: absolute;
  left: ${(props) => `${props.position}%`};
  width: 45px;
  height: 50px;
  background: url(${(props) => `${props.isDark ? lightImage : darkImage}`}) no-repeat left center;
  background-size: 513px 58px;
  animation: ${dinoAnimation} 0.4s steps(2) infinite;
`;

const devAnimation = keyframes`
  0% { background-position: -344px; }
  100% { background-position: -508px; }
`;

const Dev = styled.div`
  position: absolute;
  left: ${(props) => `${props.position || 7}%`};
  width: 41px;
  height: 53px;
  background: url(${(props) => `${props.isDark ? lightImage : darkImage}`}) no-repeat left center;
  background-size: 513px 53px;
  animation: ${devAnimation} 0.6s steps(4) infinite;
`;

export default {
  RaceContainer,
  Wrapper,
  Dino,
  Dev,
};
