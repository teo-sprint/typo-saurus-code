import React, { useEffect } from 'react';
import { showTypo } from '../../util/showTypo';
import { useNavigateToResult } from '../../util/useNavigateToResult';
import TypoTitleWrapper from '../TypoTitle/TypoTitle.styled';

const GAMEOVER_TYPO =
  "<div class='typo'>" +
  "<p class='prompt'>  ___   __   __  __ ____ _____ _  _ ____ ____ </p>" +
  "<p class='prompt'> / __) /__\\ (  \\/  ( ___(  _  ( \\/ ( ___(  _ \\</p>" +
  "<p class='prompt'>( (_-./(__)\\ )    ( )__) )(_)( \\  / )__) )   /</p>" +
  "<p class='prompt'> \\___(__)(__(_/\\/\\_(____(_____) \\/ (____(_)\\_)</p>" +
  "<p class='prompt'>                                                  </p>\
  </div>";

const DELAY = 5000;

function GameOver({ typingSpeed, playtime, accuracy, maxCombo }) {
  const navigateToResult = useNavigateToResult();

  useEffect(() => {
    setTimeout(() => {
      navigateToResult({ typingSpeed, playtime, accuracy, maxCombo });
    }, DELAY);
  }, []);

  useEffect(() => {
    showTypo(GAMEOVER_TYPO);
  }, []);

  return (
    <div>
      <TypoTitleWrapper.TypoTitle className='terminal' />
    </div>
  );
}

export default GameOver;
