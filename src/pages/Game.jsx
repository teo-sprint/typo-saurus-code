import { useEffect, useRef, useState, useCallback } from 'react';
import Editor from '../components/Editor';
import GameClear from '../components/GameClear/GameClear';
import GameOver from '../components/GameOver/GameOver';
import Race from '../components/Race';
import Styled from './Game.styled';
import useInterval from '../util/useInterval';

const data = [
  '<',
  'h',
  't',
  'm',
  'l',
  ' ',
  'l',
  'a',
  'n',
  'g',
  '=',
  '"',
  'e',
  'n',
  '"',
  '>',
  '\n',
  '<',
  'h',
  'e',
  'a',
  'd',
  '>',
  '\n',
  '<',
  'm',
  ' ',
  'l',
  'a',
  'n',
  'g',
  '=',
  '"',
  'e',
  'n',
  '"',
  '>',
  '\n',
  '<',
  'h',
  'e',
  'a',
  'd',
  '>',
  '\n',
  '<',
  'm',
  'e',
  't',
  'a',
  ' ',
  'c',
  'h',
  'a',
  'r',
  's',
  'e',
  't',
  '=',
  '"',
  'U',
  'T',
  'F',
  '-',
  '8',
  '"',
  '>',
  '<',
  'h',
  't',
  'm',
  'l',
  ' ',
  'l',
  'a',
  'n',
  'g',
  '=',
  '"',
  'e',
  'n',
  '"',
  '>',
  '\n',
  '<',
  'h',
  'e',
  'a',
  'd',
  '>',
  '\n',
  '<',
  'm',
  'e',
  't',
  'a',
  ' ',
  'c',
  'h',
  'a',
  'r',
  's',
  'e',
  't',
  '=',
  '"',
  'U',
  'T',
  'F',
  '-',
  '8',
  '"',
  '>',

  '<',
  'h',
  't',
  'm',
  'l',
  ' ',
  'l',
  'a',
  'n',
  'g',
  '=',
  '"',
  'e',
  'n',
  '"',
  '>',
  '\n',
  '<',
  'h',
  'e',
  'a',
  'd',
  '>',
  '\n',
  '<',
  'm',
  'e',
  't',
  'a',
  ' ',
  'c',
  'h',
  'a',
  'r',
  's',
  'e',
  't',
  '=',
  '"',
  'U',
  'T',
  'F',
  '-',
  '8',
  '"',
  '>',
  '<',
  'h',
  't',
  'm',
  'l',
  ' ',
  'l',
  'a',
  'n',
  'g',
  '=',
  '"',
  'e',
  'n',
  '"',
  '>',
  '\n',
  '<',
  'h',
  'e',
  'a',
  'd',
  '>',
  '\n',
  '<',
  'm',
  'e',
  't',
  'a',
  ' ',

  '<',
  'h',
  't',
  'm',
  'l',
  ' ',
  'l',
  'a',
  'n',
  'g',
  '=',
  '"',
  'e',
  'n',
  '"',
  '>',
  '\n',
  '<',
  'h',
  'e',
  'a',
  'd',
  '>',
  '\n',
  '<',
  'm',
  'e',
  't',
  'a',
  ' ',
  'c',
  'h',
  'a',
  'r',
  's',
  'e',
  't',
  '=',
  '"',
  'U',
  'T',
  'F',
  '-',
  '8',
  '"',
  '>',
];
const DECI_SEC = 100;
const DEV_OFFSET = 7;
const GAME_OVER_GAP = {
  NORMAL: 2,
  FIRE: 5,
};
const FEVER_DURATION = 3000;
const FEVER_THRESHOLD = 15;

const transCode = (data) =>
  data.map((el) => {
    return { value: el, isCorrect: true };
  });

function Game() {
  const [code, setCode] = useState(() => transCode(data));
  const [curIdx, setCurIdx] = useState(0);
  const [combo, setCombo] = useState(0);
  const maxCombo = useRef(0);
  const [wrong, setWrong] = useState(0);
  const [gameStartTimeStamp, setGameStartTimeStamp] = useState();
  const [dinoSpeed, setDinoSpeed] = useState(150);
  const [dinoPos, setDinoPos] = useState(0);
  const [isFire, setIsFire] = useState(false);
  const [isFever, setIsFever] = useState(false);
  const [isEnd, setIsEnd] = useState({ isEnd: false, type: null });

  if (combo >= maxCombo.current) {
    maxCombo.current = combo;
  }

  useInterval(
    () => {
      setDinoPos(dinoPos + (dinoSpeed / (DECI_SEC * 6) / code.length) * 100);
    },
    gameStartTimeStamp !== undefined ? DECI_SEC : null
  );

  useEffect(() => {
    if (isFever === true) return;
    if (combo < FEVER_THRESHOLD) return;
    setIsFever(true);
    setTimeout(() => setIsFever(false), FEVER_DURATION);
  }, [combo]);

  useEffect(() => {
    if (wrong === 0) return;
    if (wrong % 5 === 0) {
      setIsFire(true);
      setTimeout(() => {
        setIsFire(false);
      }, 700);
    }
  }, [wrong]);

  const progress = Math.floor((curIdx / code.length) * 100);

  const typoHandler = (e) => {
    if (progress >= 100) return;
    if (isFever) {
      setCode((prevState) => {
        prevState[curIdx].isCorrect = true;
        return [...prevState];
      });
      setCurIdx((curIdx) => curIdx + 1);
      setCombo((combo) => combo + 1);
    } else {
      if (e.key === 'Shift') return;
      if (e.key === 'Backspace') {
        if (curIdx <= 0) return;
        else {
          setCombo(() => 0);
          return setCurIdx((curIdx) => curIdx - 1);
        }
      }

      if (gameStartTimeStamp === undefined) {
        setGameStartTimeStamp(new Date());
      }

      const enter = e.key === 'Enter' && code[curIdx].value === '\n' ? true : false;

      if (e.key === code[curIdx].value || enter) {
        setCode((prevState) => {
          prevState[curIdx].isCorrect = true;
          return [...prevState];
        });
        setCurIdx((curIdx) => curIdx + 1);
        setCombo((combo) => combo + 1);
      } else {
        setCode((prevState) => {
          prevState[curIdx].isCorrect = false;
          return [...prevState];
        });
        setCurIdx((curIdx) => curIdx + 1);
        setCombo(() => 0);
        setWrong((wrong) => wrong + 1);
        setDinoSpeed(dinoSpeed + 10);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', typoHandler);

    return () => {
      window.removeEventListener('keydown', typoHandler);
    };
  });

  useEffect(() => {
    if (isEnd.isEnd === true) return;
    const isGameOver = progress + DEV_OFFSET - dinoPos <= (isFire ? GAME_OVER_GAP.FIRE : GAME_OVER_GAP.NORMAL);
    if (progress === 100) {
      setIsEnd({ isEnd: true, type: 'clear' });
    } else if (isGameOver) {
      setIsEnd({ isEnd: true, type: 'gameOver' });
    }
  }, [progress, dinoPos, isFire]);

  if (isEnd.isEnd === true) {
    const playtime = Math.floor((Date.now() - gameStartTimeStamp) / 1000);
    const accuracy = Math.floor((code.filter((el) => el.isCorrect === true).length / code.length) * 100);
    if (isEnd.type === 'clear') {
      const typingSpeed = Math.floor((code.length / playtime) * 60);
      return (
        <div className='h-[100%] flex justify-center items-center text-display'>
          <GameClear typingSpeed={typingSpeed} playtime={playtime} accuracy={accuracy} maxCombo={maxCombo.current} />
        </div>
      );
    }

    const typingSpeed = Math.floor((curIdx / playtime) * 60);
    return (
      <div className='h-[100%] flex justify-center items-center text-display'>
        <GameOver typingSpeed={typingSpeed} playtime={playtime} accuracy={accuracy} maxCombo={maxCombo.current} />
      </div>
    );
  }

  return (
    <Styled.GameContainer isFever={isFever}>
      <Race dinoPosition={dinoPos} devPosition={progress} isFire={isFire} isFever={isFever} />
      <Editor curIdx={curIdx} code={code} isFever={isFever} />
      <Styled.ComboLine> COMBO : {combo} </Styled.ComboLine>
    </Styled.GameContainer>
  );
}

export default Game;
