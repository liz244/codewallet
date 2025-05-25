import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fragments from './pages/Fragments';
import FragmentForm from './pages/FragmentForm';
import Tags from './pages/Tags';
import Info from './pages/Info';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          zIndex: 999,
        }}
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      <Router>
        <Routes>
          <Route path="/" element={<Fragments />} />
          <Route path="/new" element={<FragmentForm />} />
          <Route path="/edit/:id" element={<FragmentForm />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
