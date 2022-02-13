import { Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro';
import Game from './pages/Game';
import Result from './pages/Result';

function App() {
  return (
    <div className='App text-body w-[100vw] h-[100vh] flex justify-center items-center bg-base-bg'>
      <div className='w-[800px] h-[600px] bg-base-dark'>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/game' element={<Game />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
