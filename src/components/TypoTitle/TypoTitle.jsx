import React, { useEffect } from 'react';
import { showTypo } from '../../util/showTypo.js';
import Styled from './TypoTitle.styled.js';

function TypoTitle() {
  useEffect(() => {
    const onPressSpace = (e) => {
      if (e.keyCode !== 32) {
        showTypo();
      }
    };
    document.body.addEventListener('keyup', onPressSpace);

    return () => {
      document.body.removeEventListener('keyup', onPressSpace);
    };
  }, []);

  useEffect(() => {
    showTypo();
  }, []);

  return <Styled.TypoTitle className='terminal' />;
}

export default TypoTitle;
