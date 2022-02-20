import { useEffect } from 'react';
import NameCard from '../components/NameCard/NameCard';
import Styled from './Credit.styled';
import TypoTitleWrapper from '../components/TypoTitle/TypoTitle.styled';
import { TEAM_TSD } from '../credit';
import { showTypo } from '../util/showTypo';
import { useNavigate } from 'react-router-dom';

const CREDIT_TYPO =
  "<div class='typo'>" +
  "<p class='prompt'>  __ ___  ___ ___ __ ____ ___ </p>" +
  "<p class='prompt'> / _(  ,)(  _(   (  (_  _/ __)</p>" +
  "<p class='prompt'>( (_ )  \\ ) _)) ) )(  )( \\__ \\</p>" +
  "<p class='prompt'> \\__(_)\\_(___(___(__)(__)(___/</p>" +
  "<p class='prompt'>                              </p>\
  </div>";

function Credit() {
  const navigate = useNavigate();
  useEffect(() => {
    showTypo(CREDIT_TYPO);
  }, []);

  return (
    <div>
      <TypoTitleWrapper.TypoTitle className='terminal' />
      <Styled.CreditSection>
        <Styled.CreditLeft>개발</Styled.CreditLeft>
        <Styled.CreditRight>
          {TEAM_TSD.filter((member) => member.role === 'developer').map((member, idx) => {
            return <NameCard className='has-link' name={member.name} link={member.link} key={idx} />;
          })}
        </Styled.CreditRight>
      </Styled.CreditSection>
      <Styled.CreditSection className='designer__section'>
        <Styled.CreditLeft>디자인</Styled.CreditLeft>
        <Styled.CreditRight>
          {TEAM_TSD.filter((member) => member.role === 'designer').map((member, idx) => {
            return <NameCard className='has-link' name={member.name} link={member.link} key={idx} />;
          })}
        </Styled.CreditRight>
      </Styled.CreditSection>
      <Styled.CreditSection className='sound__section'>
        <Styled.CreditLeft>사운드</Styled.CreditLeft>
        <Styled.CreditRight className='sound__section'>
          {TEAM_TSD.filter((member) => member.role === 'sound').map((member, idx) => {
            return <NameCard name={member.name} key={idx} />;
          })}
        </Styled.CreditRight>
      </Styled.CreditSection>
      <Styled.CreditSection className='teo__section'>
        <Styled.CreditLeft>SPECIAL THANKS TO</Styled.CreditLeft>
        <Styled.CreditRight className='teo__section'>
          {TEAM_TSD.filter((member) => member.role === 'mental_holding').map((member, idx) => {
            return <NameCard className='has-link' name={member.name} link={member.link} key={idx} />;
          })}
        </Styled.CreditRight>
      </Styled.CreditSection>
      <Styled.BackButton type='button' onClick={() => navigate(-1)}>
        뒤로가기
      </Styled.BackButton>
    </div>
  );
}

export default Credit;
