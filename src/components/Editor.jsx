import './Editor.css';
import { Line } from './Line';

function Editor({ curIdx, code }) {
  return (
    <div className='container'>
      <Line code={code} />
      <div>
        {code.map((el, idx) => (
          <span key={idx}>
            <span key={idx} className={idx === curIdx ? 'correct cursor' : el.isCorrect ? 'correct' : 'false'}>
              {el.value}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Editor;
