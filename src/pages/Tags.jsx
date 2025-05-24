import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { getTags, saveTags } from '../utils/storage'; // ✅ Ajouté
import '../styles/tags.css';

function Tags() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  // Charger les tags depuis localStorage au chargement
  useEffect(() => {
    const savedTags = getTags();
    setTags(savedTags);
  }, []);

  const addTag = () => {
    const cleanTag = newTag.trim();
    if (cleanTag && !tags.includes(cleanTag)) {
      const updatedTags = [...tags, cleanTag];
      setTags(updatedTags);
      saveTags(updatedTags); // ✅ Sauvegarde
      setNewTag('');
    }
  };

  const deleteTag = (tagToDelete) => {
    const updated = tags.filter(tag => tag !== tagToDelete);
    setTags(updated);
    saveTags(updated); // ✅ Sauvegarde
  };

  return (
    <>
      <Header />
      <main className="tags-container">
        <h2>Manage Tags</h2>

        <div className="new-tag">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Add new tag"
          />
          <button onClick={addTag}>➕ Add</button>
        </div>

        <ul className="tag-list">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <li key={index} className="tag-item">
                {tag}
                <button onClick={() => deleteTag(tag)}>❌</button>
              </li>
            ))
          ) : (
            <p>No tags yet.</p>
          )}
        </ul>
      </main>
    </>
  );
}

export default Tags;
