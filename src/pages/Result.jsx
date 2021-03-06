import { useSearchParams } from 'react-router-dom';
import RaceStyled from '../components/Race.styled';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';
import { Bgm } from '../components/Bgm.jsx';
import score from '../assets/score.wav';
import { useEffect } from 'react';
import { showTypo } from '../util/showTypo';
import TypoTitleWrapper from '../components/TypoTitle/TypoTitle.styled.js';
import Music from '../components/Music/Music';
import { useNavigate } from 'react-router-dom';

const SCORE_TYPO =
  "<div class='typo'>" +
  "<p class='prompt'> ___  ___ _____ ____ ____ </p>" +
  "<p class='prompt'>/ __)/ __(  _  (  _ ( ___)</p>" +
  "<p class='prompt'>\\__ ( (__ )(_)( )   /)__) </p>" +
  "<p class='prompt'>(___/\\___(_____(_)\\_(____)</p>" +
  "<p class='prompt'>                            </p>\
  </div>";

const RESULT_ITEM = ['typingSpeed', 'playtime', 'accuracy', 'maxCombo'];

function Result() {
  const [playing, toggle] = Bgm(score);
  const [searchParams] = useSearchParams();
  const [typingSpeed, playtime, accuracy, maxCombo] = RESULT_ITEM.map((key) => searchParams.get(key));
  const navigate = useNavigate();

  useEffect(() => {
    showTypo(SCORE_TYPO);
  }, []);

  useEffect(() => {
    const onPressSpace = (e) => {
      if (e.keyCode === 67) {
        navigate('/credit');
      }
    };
    document.body.addEventListener('keyup', onPressSpace);

    return () => {
      document.body.removeEventListener('keyup', onPressSpace);
    };
  }, []);

  return (
    <>
      <div className='absolute z-10 top-[24px] right-[24px]'>
        <Music isPlaying={playing} onClick={toggle} />
      </div>
      <div className='relative w-[100%] h-[100%] flex flex-col column justify-center items-center text-white'>
        <TypoTitleWrapper.TypoTitle className='terminal result' />
        <ScoreBoard typingSpeed={typingSpeed} playtime={playtime} accuracy={accuracy} maxCombo={maxCombo} />
        <div className='w-[135px] h-[58px] relative'>
          <RaceStyled.Dino position={0} isDark={true} isFire={true} />
          <RaceStyled.Dev position={70} isDark={true} isDead={false} />
        </div>
      </div>
    </>
  );
}

export default Result;
