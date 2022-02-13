import React, { useEffect } from 'react';
import { showTypo } from '../../util/showTypo.js';
import Styled from './TypoTitle.styled.js';

const showTypoText =
  "<div class='typo'>" +
  "<p class='prompt'> ____ _  _ ____ _____</p>" +
  "<p class='prompt'>(_  _( \\/ (  _ (  _  )</p>" +
  "<p class='prompt'> )(  \\  / )___/)(_)(</p>" +
  "<p class='prompt'> (__) (__)(__) (_____)</p>" +
  "<p class='prompt'> ___   __   __  __ ____ __  __ ___     ___ _____ ____ ____</p>" +
  "<p class='prompt'>/ __) /__\\ (  )(  (  _ (  )(  / __)   / __(  _  (  _ ( ___)</p>" +
  "<p class='prompt'>\\__ \\/(__)\\ )(__)( )   /)(__)(\\__ \\  ( (__ )(_)( )(_) )__) </p>" +
  "<p class='prompt'>(___(__)(__(______(_)\\_(______(___/   \\___(_____(____(____)</p>" +
  "<p class='prompt'>                                                              </p>\
    </div>";

function TypoTitle() {
  useEffect(() => {
    const onPressSpace = (e) => {
      if (e.keyCode !== 32) {
        showTypo(showTypoText);
      }
    };
    document.body.addEventListener('keyup', onPressSpace);

    return () => {
      document.body.removeEventListener('keyup', onPressSpace);
    };
  }, []);

  useEffect(() => {
    showTypo(showTypoText);
  }, []);

  return <Styled.TypoTitle className='terminal' />;
}

export default TypoTitle;
