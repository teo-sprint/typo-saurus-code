import styled from "styled-components";
import dev from '../../public/images/dev.png'


const RaceContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border-bottom: solid 1px rgba(255, 255, 255, 0.05);
  background-color: #242835;
  padding : 24px 26px;
`
const Wrapper = styled.div`
    position: relative;
`

const Dino = styled.div`
    position : absolute;
    left : ${props => props.position};
    width: 30px;    
    height: 32px;
    background: #E5E5E5;
`
const Dev = styled.div`
    position : absolute;
    left : ${props => props.position || '40px'};
    width: 60px;
    height: 60px;
    background-image: url(${dev});
    background-size:contain;
`

export default {
  RaceContainer, 
  Wrapper,
  Dino, 
  Dev,
}