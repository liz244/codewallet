import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // tu peux changer le thème si tu veux

import '../styles/modal.css';

function ModalCode({ code, onClose }) {
  const codeRef = useRef();

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.textContent = code;
      hljs.highlightElement(codeRef.current);
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

        <pre>
          <code ref={codeRef} className="language-javascript" />
        </pre>

        <button className="copy-button" onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
}

export default ModalCode;
