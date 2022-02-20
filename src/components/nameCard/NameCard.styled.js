import styled, { css, keyframes } from 'styled-components';

const fever = keyframes`
  0% {
    color : rgba(255, 255, 255, 0.3);
  }

  50% {
    color : rgba(0, 0, 0, 0.3)
  }

  100% {
    color : rgba(255, 255, 255, 0.3);
  }
`;

const NameCardWrapper = styled.div`
  &:hover {
    ${(props) =>
      props.link
        ? css`
            animation: ${fever} 0.5s ease-in-out infinite;
          `
        : null};
  }
`;

export default NameCardWrapper;
