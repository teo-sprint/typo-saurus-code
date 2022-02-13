import './Editor.css';
import { Line } from './Line';

function Editor({ curIdx, code }) {
  const check = (el, idx) => {
    let clsNm = '';
    if (idx < curIdx && !el.isCorrect) clsNm += 'text-red-light ';
    if (idx < curIdx && el.isCorrect) clsNm += 'text-base-light ';
    if (idx === curIdx) clsNm += 'cursor';
    return clsNm;
  };

  return (
    <div className='container text-grey-300-light'>
      <Line code={code} />
      <div>
        {code.map((el, idx) => (
          <span key={idx} className='text-grey-600-dark'>
            <span className={check(el, idx)}>{el.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Editor;
