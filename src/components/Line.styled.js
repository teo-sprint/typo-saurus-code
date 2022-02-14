import styled, { css, keyframes } from 'styled-components';

const LineContainer = styled.div`
  text-align: right;
  padding-left: 24px;
  box-sizing: content-box;
  margin-right: 12px;
`;

const LineNum = styled.div`
  color: ${(props) => (props.isFever ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)')};
`;

export default {
  LineContainer,
  LineNum,
};
