import { Route, Routes } from 'react-router-dom';
import Intro from './pages/Intro';
import Game from './pages/Game';
import Result from './pages/Result';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Intro />} />
        <Route path="/game" element={<Game />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
