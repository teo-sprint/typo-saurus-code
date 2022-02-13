import { useState, useEffect } from 'react';

export const Bgm = (bgmUrl) => {
  const [audio] = useState(new Audio(bgmUrl));
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.loop = true;
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  useEffect(() => {
    const onPressSpace = (e) => {
      if (e.keyCode === 27) {
        toggle();
      }
    };
    document.body.addEventListener('keyup', onPressSpace);

    return () => {
      document.body.removeEventListener('keyup', onPressSpace);
    };
  }, []);

  return [playing, toggle];
};
