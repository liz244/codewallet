import { useState } from 'react';
import ModalCode from '../components/ModalCode';

function Fragments() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState('');

  const openModal = (code) => {
    setSelectedCode(code);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Ta liste de fragments ici */}
      <button onClick={() => openModal('const x = 42;')}>👁 Voir fragment</button>

      {isModalOpen && (
        <ModalCode code={selectedCode} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
