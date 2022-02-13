import { useEffect, useRef, useState } from 'react';
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
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(5);
  const [isDark, setIsDark] = useState(true);
  const [wrong , setWorng] = useState(0);

  const typoHandler = (e) => {
    if (e.key === 'Shift') return;
    if (e.key === 'Backspace') {
      if (curIdx <= 0) return;
      else {
        setCombo(() => 0);
        return setCurIdx((curIdx) => curIdx - 1);
      }
    }

    const enter = e.key === 'Enter' && code[curIdx].value === '\n' ? true : false;

    if (e.key === code[curIdx].value || enter) {
      setCode((prevState) => {
        prevState[curIdx].isCorrect = true;
        return [...prevState];
      });
      setCurIdx((curIdx) => curIdx + 1);
      setCombo((combo) => combo + 1);
      if (combo >= maxCombo) {
        setMaxCombo(() => combo);
      }
    } else {
      setCode((prevState) => {
        prevState[curIdx].isCorrect = false;
        console.log(prevState[curIdx]);
        return [...prevState];
      });
      setCurIdx((curIdx) => curIdx + 1);
      setCombo(() => 0);
      setWorng((wrong) => wrong+1);

    }
  };

  const word = code.length;
  const wrongWord = code.filter((el) => !el.isCorrect);

  useEffect(() => {
    window.addEventListener('keydown', typoHandler);

    return () => {
      window.removeEventListener('keydown', typoHandler);
    };
  });

  return (
    <div className='relative'>
      <Race />
      <Editor curIdx={curIdx} code={code} />
      <div className='p-2 text-green-light absolute bottom-5 right-5'>COMBO : {combo}</div>
    </div>
  );
}

export default Game;
