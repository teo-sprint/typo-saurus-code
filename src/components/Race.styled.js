import styled from 'styled-components';
import dev from '../../public/images/dev.png';
import dino from '../../public/images/dino.png';

const RaceContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  background-color: #242835;
  padding: 24px 26px;
`;
const Wrapper = styled.div`
  position: relative;
`;

const Dino = styled.div`
  position: absolute;
  left: ${(props) => `${props.position}%`};
  width: 32px;
  height: 50px;
  background: url(${dino}) no-repeat;
  background-size: cover;
  transition: 0.5;
  background-position: ${(props) =>
    props.position % 3 === 0 ? '-10px 0' : props.position % 3 === 1 ? '-42px 0' : '-74px 0'};
`;
const Dev = styled.div`
  position: absolute;
  left: ${(props) => `${props.position || 3}%`};
  width: 50px;
  height: 60px;
  background: url(${dev}) no-repeat;
  background-size: cover;
  transition: 0.5;
  background-position: ${(props) => (props.position % 2 === 0 ? '-60px 0' : '-112px 0')};
`;

export default {
  RaceContainer,
  Wrapper,
  Dino,
  Dev,
};
