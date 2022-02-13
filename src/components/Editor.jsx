import './Editor.css';
import { Line } from './Line';

function Editor({ curIdx, code }) {
  return (
    <div className='container'>
      <Line code={code} />
      <div>
        {code.map((el, idx) => (
          <span key={idx}>
            <span className={idx === curIdx ? 'correct cursor' : el.isCorrect ? 'correct' : 'false'}>{el.value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Editor;

// 초기상태  : 0.6
// 현재 입력위치(idx)보다 작고 isCorrect값이 true 일때 => 오타내지않고 지나간 경우
// 현재 입력위치(idx)보다 작고 isCorrect값이 false 일때 => 오타내고 지나간 경우
