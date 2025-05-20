import { useEffect, useRef } from 'react';
import '../styles/modal.css';

function ModalCode({ code, onClose }) {
  const codeRef = useRef();

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.textContent = code;
    }
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>❌</button>
        <pre ref={codeRef} className="code-block" />
        <button className="copy-button" onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
}

export default ModalCode;
