import { Bgm } from '../components/Bgm.jsx';
import Initial from '../components/Initial/Initial.jsx';
import intro from '../assets/intro.wav';
import { Music } from '../components/Music';

function Intro() {
  const [playing, toggle] = Bgm(intro);

  return (
    <div className='relative'>
      <div className='absolute z-10 top-[34px] right-[34px] cursor-pointer' onClick={toggle}>
        <Music playing={playing} />
      </div>
      <Initial />
    </div>
  );
}

export default Intro;
