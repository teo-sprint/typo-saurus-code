import styled from 'styled-components';
import musicOffDarkMode from '/images/musicoff-dark.png';
import musicOnDarkMode from '/images/musicon-dark.png';
import musicOffLightMode from '/images/musicoff-light.png';
import musicOnLightMode from '/images/musicon-light.png';

const MusicWrapper = styled.div`
  width: 44px;
  height: 44px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    background: url(${(props) => (props.isPlaying ? musicOnDarkMode : musicOffDarkMode)}) no-repeat;
  }

  &:hover {
    background-color: white;
    & > div {
      background: url(${(props) => (props.isPlaying ? musicOnLightMode : musicOffLightMode)}) no-repeat;
    }
  }
`;

const Music = styled.div`
  width: 24px;
  height: 24px;
`;

export default {
  MusicWrapper,
  Music,
};
