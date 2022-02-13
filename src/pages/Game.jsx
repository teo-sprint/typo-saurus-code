import { useEffect, useRef, useState } from 'react';
import styles from './Game.module.css';
import Editor from '../components/Editor';
import Race from '../components/Race';

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

const transCode = (data) =>
  data.map((el) => {
    return { value: el, isCorrect: true };
  });

function Game() {
  const [code, setCode] = useState(() => transCode(data));
  const [curIdx, setCurIdx] = useState(0);

  const typoHandler = (e) => {
    if (e.key === 'Shift') return;
    if (e.key === 'Backspace') {
      if (curIdx <= 0) return;
      else return setCurIdx((curIdx) => curIdx - 1);
    }

    if (e.key === code[curIdx].value) {
      setCode((prevState) => {
        prevState[curIdx].isCorrect = true;
        return [...prevState];
      });
      setCurIdx((curIdx) => curIdx + 1);
    } else {
      setCode((prevState) => {
        prevState[curIdx].isCorrect = false;
        console.log(prevState[curIdx]);
        return [...prevState];
      });
      setCurIdx((curIdx) => curIdx + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', typoHandler);

    return () => {
      window.removeEventListener('keydown', typoHandler);
    };
  });

  return (
    <div className={styles.container}>
      <Race />
      <Editor curIdx={curIdx} code={code} />
    </div>
  );
}

export default Game;
