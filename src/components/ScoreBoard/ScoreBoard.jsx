import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const KEY_CODE = {
  ENTER: 13,
  LEFT: 37,
  RIGHT: 39,
};
const SHARE = '공유하기';
const RESTART = '다시하기';

function ScoreBoard({ typingSpeed, playtime, accuracy, maxCombo }) {
  const [selectedButton, setSelectedButton] = useState(SHARE);
  const navigate = useNavigate();

  const onClickShare = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => alert('URL을 복사했어요!'));
  }, []);
  const onClickRestart = useCallback(() => {
    navigate('/');
  }, []);

  useEffect(() => {
    const onKeydown = (e) => {
      if (e.keyCode === KEY_CODE.LEFT) {
        setSelectedButton(SHARE);
      } else if (e.keyCode === KEY_CODE.RIGHT) {
        setSelectedButton(RESTART);
      } else if (e.keyCode === KEY_CODE.ENTER) {
        if (selectedButton === SHARE) onClickShare();
        else if (selectedButton === RESTART) onClickRestart();
      }
    };
    document.body.addEventListener('keydown', onKeydown);
    return () => {
      document.body.removeEventListener('keydown', onKeydown);
    };
  }, [selectedButton]);

  return (
    <div className='w-[372px] h-[300px] flex flex-col justify-center items-center bg-[url(/images/scoreBorder.svg)] gap-4 mb-10'>
      <div className='flex flex-col gap-6'>
        <ul className='w-[297px] flex justify-between flex-wrap'>
          <li className='w-[138px] h-[21px] flex justify-between'>
            <span>평균타수</span>
            <span className='text-white'>{typingSpeed}타</span>
          </li>
          <li className='w-[138px] h-[21px] flex justify-between'>
            <span>플레이시간</span>
            <span className='text-white'>{playtime}s</span>
          </li>
        </ul>
        <ul className='w-[297px] flex justify-between flex-wrap'>
          <li className='w-[138px] h-[21px] flex justify-between'>
            <span>정확도</span>
            <span className='text-white'>{accuracy}%</span>
          </li>
          <li className='w-[138px] h-[21px] flex justify-between'>
            <span>최대콤보</span>
            <span className='text-white'>{maxCombo}번</span>
          </li>
        </ul>
      </div>
      <p>-----------------------------------</p>
      <div className='flex flex-col items-center'>
        <p className='mb-8'>친구에게 게임을 공유하자!</p>
        <div className='w-[192px] h-[37px] flex justify-between'>
          <button
            className={`${
              selectedButton === SHARE ? 'bg-white text-base-dark' : ''
            } p-2 hover:bg-white hover:text-base-dark`}
            onClick={onClickShare}
          >
            공유하기
          </button>
          <button
            className={`${
              selectedButton === RESTART ? 'bg-white text-base-dark' : ''
            } p-2 hover:bg-white hover:text-base-dark`}
            onClick={onClickRestart}
          >
            다시하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
