import { Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro';
import Game from './pages/Game';
import Result from './pages/Result';

function App() {
  return (
<<<<<<< HEAD
    <div className='App'>
      <Routes>
        <Route path='' element={<Intro />} />
=======
    <div className='App' style={{ width: '800px', height: '600px', backgroundColor: '#242835' }}>
      <Routes>
        <Route path='/' element={<Intro />} />
>>>>>>> 09941198dcf28e776349e5c28c95e249ff768ade
        <Route path='/game' element={<Game />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
