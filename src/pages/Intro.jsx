import { Bgm } from '../components/Bgm.jsx';
import Initial from '../components/Initial/Initial.jsx';
import intro from '../assets/intro.wav';
import { Music } from '../components/Music';
import styled from 'styled-components';

const MusicWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 34px;
  right: 34px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Intro() {
  const [playing, toggle] = Bgm(intro);

  return (
    <div className='relative'>
      <MusicWrapper onClick={toggle}>
        <Music playing={playing} />
      </MusicWrapper>
      <Initial />
    </div>
  );
}

export default Intro;
