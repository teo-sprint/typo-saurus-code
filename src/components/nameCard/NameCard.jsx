import NameCardWrapper from './NameCard.styled';

function NameCard({ name, link }) {
  return (
    <NameCardWrapper link={link}>
      <a href={link}>
        <span>{name}</span>
      </a>
    </NameCardWrapper>
  );
}

export default NameCard;
