import React from 'react';
import Style from './Music.styled.js';

function Music({ isPlaying = false, onClick }) {
  return (
    <Style.MusicWrapper isPlaying={isPlaying} onClick={onClick}>
      <Style.Music />
    </Style.MusicWrapper>
  );
}

export default Music;
