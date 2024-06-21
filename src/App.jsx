import { useEffect } from 'react';
import './App.css';
// import '/home/vicky/Escritorio/bingo-music/src/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Game from './components/Game';
import Home from './components/Home';

const lockOrientation = () => {
  const screenOrientation = window.screen.orientation;
  const lockPromise = screenOrientation.lock ? screenOrientation.lock('landscape') : Promise.resolve();
  lockPromise.catch(() => {});
};

const App = () => {
  useEffect(() => {
    lockOrientation();

  // Función de limpieza para desbloquear la orientación si es necesario
    return () => {
      if (window.screen && window.screen.orientation && window.screen.orientation.unlock) {
        window.screen.orientation.unlock();
      }
    };
  }, []);

  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
