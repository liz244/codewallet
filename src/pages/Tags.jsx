import { useState } from 'react';
import Header from '../components/Header';
import '../styles/tags.css';

function Tags() {
  const [tags, setTags] = useState(['React', 'API', 'State']);
  const [newTag, setNewTag] = useState('');

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const deleteTag = (tagToDelete) => {
    const updated = tags.filter(tag => tag !== tagToDelete);
    setTags(updated);
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
          {tags.map((tag, index) => (
            <li key={index} className="tag-item">
              {tag}
              <button onClick={() => deleteTag(tag)}>❌</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Tags;
