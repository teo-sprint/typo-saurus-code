import { Bgm } from '../components/Bgm.jsx';
import Initial from '../components/Initial/Initial.jsx';
import intro from '../assets/intro.wav';
import Music from '../components/Music/Music.jsx';

function Intro() {
  const [playing, toggle] = Bgm(intro);

  return (
    <>
      <div className='absolute z-10 top-[24px] right-[24px]'>
        <Music isPlaying={playing} onClick={toggle} />
      </div>
      <div className='relative'>
        <Initial />
      </div>
    </>
  );
}

export default Intro;
