import styled from 'styled-components';

const TypoTitle = styled.div`
  position: relative;
  padding: 4rem;

  .prompt {
    color: #fff;
    display: block;
    font-family: 'D2 coding';
    text-align: center;
    text-transform: uppercase;
    font-size: 0.9em;
    letter-spacing: 0.15em;
    white-space: pre-wrap;
    text-shadow: 0 0 2px rgba(#fff, 0.75);
    line-height: 5px;
    margin-bottom: 0.75em;
  }

  .typo {
    p {
      letter-spacing: 0;
      opacity: 0;
    }

    p.show {
      opacity: 1;
    }
  }
`;

export default { TypoTitle };
