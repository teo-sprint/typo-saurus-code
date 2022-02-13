import React, { useEffect } from 'react';
import { useNavigateToResult } from '../../util/useNavigateToResult';

const CLEAR_TYPO = `  ___   __   __  __ ____ _____ _  _ ____ ____ 
 / __) /__\\ (  \\/  ( ___(  _  ( \\/ ( ___(  _ \\
( (_-./(__)\\ )    ( )__) )(_)( \\  / )__) )   /
 \\___(__)(__(_/\\/\\_(____(_____) \\/ (____(_)\\_)
`;
const DELAY = 1500;

function GameOver({ typingSpeed, playtime, accuracy, maxCombo }) {
  const navigateToResult = useNavigateToResult();

  useEffect(() => {
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

export default GameOver;
