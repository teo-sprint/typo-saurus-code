import { useState } from 'react';
import './Editor.css';
import { Line } from './Line';

function Editor({ curIdx, code }) {
  const [line, setLine] = useState(0);
  /*
  1. curidx   // i < curIdx 검은색 | 빨간색
  2. arrCode { value : data, isOta : false} 
  3. comboCnt
  // curIdx <= i 회색
  // for문 return <div> </div>
  // white-space : pre-line;
  // 글자 하나에 대한 span, css after (커서), 뉴라인이랑 탭 아스키코드 '\n' pre로 감싸서 라인넘겨주고 line length로 감싸준다
  // 입력창은 없는데 입력은 되게하고 입력이 맞게되면은 글자색이 바뀌면서 idx++
  // 유저는 틀렸다는거를 글자 색보고 안다
  */

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
// idx === curidx ? 'cursor' : (el.isCorrect ? 'correct' : 'false')

export default Editor;

// 초기상태  : 0.6
// 현재 입력위치(idx)보다 작고 isCorrect값이 true 일때 => 오타내지않고 지나간 경우
// 현재 입력위치(idx)보다 작고 isCorrect값이 false 일때 => 오타내고 지나간 경우
