import React, { useEffect } from 'react';
import { useNavigateToResult } from '../../util/useNavigateToResult';

const CLEAR_TYPO = `  ___ __   ____   __   ____ 
 / __(  ) ( ___) /__\\ (  _ \\
( (__ )(__ )__) /(__)\\ )   /
 \\___(____(____(__)(__(_)\\_)
`;
const DELAY = 1500;

function GameClear({ typingSpeed, playtime, accuracy, maxCombo }) {
  const navigateToResult = useNavigateToResult();

  useEffect(() => {
    console.log('end');
    setTimeout(() => {
      navigateToResult({ typingSpeed, playtime, accuracy, maxCombo });
    }, DELAY);
  }, []);

  return (
    <div>
      {CLEAR_TYPO.split('\n').map((line, index) => (
        <pre key={index} className='text-white display'>
          {line}
        </pre>
      ))}
    </div>
  );
}

export default GameClear;
