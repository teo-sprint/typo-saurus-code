import React, { useEffect } from 'react';
import { showTypo } from '../../util/showTypo';
import { useNavigateToResult } from '../../util/useNavigateToResult';
import TypoTitleWrapper from '../TypoTitle/TypoTitle.styled';

const CLEAR_TYPO =
  "<div class='typo'>" +
  "<p class='prompt'>  ___ __   ____   __   ____ </p>" +
  "<p class='prompt'> / __(  ) ( ___) /__\\ (  _ \\</p>" +
  "<p class='prompt'>( (__ )(__ )__) /(__)\\ )   /</p>" +
  "<p class='prompt'> \\___(____(____(__)(__(_)\\_)</p>" +
  "<p class='prompt'>                              </p>\
  </div>";

const DELAY = 5000;

function GameClear({ typingSpeed, playtime, accuracy, maxCombo }) {
  const navigateToResult = useNavigateToResult();

  useEffect(() => {
    setTimeout(() => {
      navigateToResult({ typingSpeed, playtime, accuracy, maxCombo });
    }, DELAY);
  }, []);

  useEffect(() => {
    showTypo(CLEAR_TYPO);
  }, []);

  return (
    <div>
      <TypoTitleWrapper.TypoTitle className='terminal' />
    </div>
  );
}

export default GameClear;
