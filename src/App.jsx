import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fragments from './pages/Fragments';
import FragmentForm from './pages/FragmentForm';
import Tags from './pages/Tags';
import Info from './pages/Info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Fragments />} />
        <Route path="/new" element={<FragmentForm />} />
        <Route path="/edit/:id" element={<FragmentForm />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
