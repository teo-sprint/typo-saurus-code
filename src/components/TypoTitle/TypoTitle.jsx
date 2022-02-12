import React, { useEffect } from 'react';
import { showTypo } from '../../util/showTypo.js';
import Styled from './TypoTitle.styled.js';

function TypoTitle() {
  useEffect(() => {
    showTypo();
  }, []);

  return <Styled.TypoTitle className='terminal' />;
}

export default TypoTitle;
