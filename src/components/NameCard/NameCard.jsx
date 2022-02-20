import NameCardWrapper from './NameCard.styled';

function NameCard({ name, link, className }) {
  return (
    <NameCardWrapper className={className}>
      <a href={link}>
        <span>{name}</span>
      </a>
    </NameCardWrapper>
  );
}

export default NameCard;
