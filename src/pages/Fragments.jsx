import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ModalCode from '../components/ModalCode';
import '../styles/fragments.css';
import { getFragments } from '../utils/storage';

function Fragments() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState('');
  const [fragments, setFragments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFragments = getFragments();
    setFragments(storedFragments);
  }, []);

  const openModal = (code) => {
    setSelectedCode(code);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <main className="fragments-container">
        <div className="fragments-header">
          <h2>Your Fragments</h2>
          <button onClick={() => navigate('/new')}>➕ New Fragment</button>
        </div>

        <div className="fragments-list">
          {fragments.length > 0 ? (
            fragments.map(fragment => (
              <div key={fragment.id} className="fragment-card">
                <h3>{fragment.title}</h3>
                <p>Tags: {fragment.tags.join(', ')}</p>
                <button onClick={() => openModal(fragment.code)}>👁 View</button>
              </div>
            ))
          ) : (
            <p>No fragments yet.</p>
          )}
        </div>

        {isModalOpen && (
          <ModalCode code={selectedCode} onClose={() => setIsModalOpen(false)} />
        )}
      </main>
    </>
  );
}

export default Fragments;
