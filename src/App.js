import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Importa Navigate para redirección

import Welcomepage from './pages/Welcomepage';
import MainPage from './pages/MainPage';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Oculta la página de bienvenida después de 4 segundos
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route
          path="/welcome"
          element={
            showWelcome ? (
              <Welcomepage />
            ) : (
              <Navigate to="/main" replace />
            )
          }
        />
        <Route
          path="/bingo-app"
          element={
            showWelcome ? (
              <Navigate to="/welcome" replace />
            ) : (
              <Navigate to="/main" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
