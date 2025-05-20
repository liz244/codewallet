import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getFragments, saveFragments } from '../utils/storage'; // ✅ ajout
import '../styles/form.css';

function FragmentForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [tags, setTags] = useState('');

  const handleSave = () => {
    if (!title.trim() || !code.trim()) {
      alert("Title and code are required.");
      return;
    }

    const existingFragments = getFragments();

    const newFragment = {
      id: Date.now(),
      title,
      code,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    };

    saveFragments([...existingFragments, newFragment]);
    alert('Fragment saved!');
    navigate('/');
  };

  const handleDelete = () => {
    const confirmDelete = confirm('Delete this fragment?');
    if (confirmDelete) {
      alert('Fragment deleted. (non enregistré)');
      navigate('/');
    }
  };

  return (
    <>
      <Header />
      <main className="form-container">
        <h2>Fragment Form</h2>

        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter fragment title"
          />
        </label>

        <label>
          Code:
          <textarea
            rows={10}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here"
          />
        </label>

        <label>
          Tags (comma-separated):
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g. React, JavaScript"
          />
        </label>

        <div className="form-buttons">
          <button className="delete-btn" onClick={handleDelete}>🗑️ Delete</button>
          <button className="save-btn" onClick={handleSave}>💾 Save</button>
        </div>
      </main>
    </>
  );
}

export default FragmentForm;
