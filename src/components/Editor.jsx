import { Line } from './Line';
import Styled from './Editor.styled';

function Editor({ curIdx, code, isFever }) {
  const check = (el, idx) => {
    let clsNm = '';
    if (idx < curIdx && !el.isCorrect) clsNm += 'false ';
    if (idx < curIdx && el.isCorrect) clsNm += 'pass ';
    if (idx === curIdx) clsNm += ' cursor ';

    return clsNm;
  };

  return (
    <Styled.EditorContainer isFever={isFever}>
      <Line code={code} isFever={isFever} />
      <div>
        {code.map((el, idx) => (
          <Styled.TextLine key={idx} className={check(el, idx)} isFever={isFever}>
            {el.value}
          </Styled.TextLine>
        ))}
      </div>
    </Styled.EditorContainer>
  );
}

export default Editor;
