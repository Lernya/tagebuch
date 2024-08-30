import React from 'react';

const EntryModal = ({ entry, onClose }) => {
  if (!entry) return null;

  return (
    <div className='modal'>
      <h2>{entry.title}</h2>
      <img src={entry.image} alt={entry.title} />
      <p>{entry.content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
export default EntryModal;
