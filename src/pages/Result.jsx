import { useSearchParams } from 'react-router-dom';
import RaceStyled from '../components/Race.styled';
import ScoreBoard from '../components/ScoreBoard/ScoreBoard';

const SCORE_TYPO = ` ___  ___ _____ ____ ____ 
/ __)/ __(  _  (  _ ( ___)
\\__ ( (__ )(_)( )   /)__) 
(___/\\___(_____(_)\\_(____)
`;
const RESULT_ITEM = ['typingSpeed', 'playtime', 'accuracy', 'maxCombo'];

function Result() {
  const [searchParams] = useSearchParams();
  const [typingSpeed, playtime, accuracy, maxCombo] = RESULT_ITEM.map((key) => searchParams.get(key));

  return (
    <div className='w-[100%] h-[100%] flex flex-col column justify-center items-center text-white'>
      <div className='mb-8'>
        {SCORE_TYPO.split('\n').map((line, index) => (
          <pre key={index}>{line}</pre>
        ))}
      </div>
      <ScoreBoard typingSpeed={typingSpeed} playtime={playtime} accuracy={accuracy} maxCombo={maxCombo} />
      <div className='w-[135px] h-[58px] relative'>
        <RaceStyled.Dino position={0} isDark={true} isFire={true} />
        <RaceStyled.Dev position={70} isDark={true} isDead={false} />
      </div>
    </div>
  );
}

export default Result;
