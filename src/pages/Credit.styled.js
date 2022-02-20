import styled, { css, keyframes } from 'styled-components';

const CreditSection = styled.div`
  display: flex;
  padding: 0 37px 32px 37px;
  color: #fff;
  column-gap: 44px;
  width: 372px;
  margin: 0 auto;
  &.designer__section,
  &.sound__section {
    column-gap: 26px;
  }
`;

const CreditLeft = styled.div`
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.6);
`;

const CreditRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 46px;
  &.sound__section {
    gap: 0 20px;
  }
`;

const BackButton = styled.button`
  background-color: transparent;
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  margin: 3px auto;
`;

export default { CreditSection, CreditLeft, CreditRight, BackButton };
