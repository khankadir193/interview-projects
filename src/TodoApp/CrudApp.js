import React, { useState } from 'react';

const CrudApp = () => {
  const [items, setItems] = useState([{ id: 1, name: 'Sample Item' }]);
  const [input, setInput] = useState('');

  // CREATE
  const handleAdd = () => {
    if (!input) return;
    const newItem = { id: Date.now(), name: input };
    setItems([...items, newItem]);
    setInput('');
  };

  // UPDATE
  const handleUpdate = (id, newName) => {
    setItems(items.map(item => (item.id === id ? { ...item, name: newName } : item)));
  };

  // DELETE
  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUpdate(item.id, prompt('New Name:', item.name))}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
