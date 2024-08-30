import React, { useState } from 'react';

const AddEntryModal = ({ onClose, onAddEntry }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !image || !content) {
      alert('All fields are required.');
      return;
    }

    // Check if entry exists for that date
    const existingEntries =
      JSON.parse(localStorage.getItem('diaryEntries')) || [];
    const entryExists = existingEntries.some((entry) => entry.date === date);

    if (entryExists) {
      alert('Entry for this date already exists. Please come back tomorrow.');
      return;
    }

    onAddEntry({ title, date, image, content });
    onClose(); // Close the modal after adding entry
  };

  return (
    <div className='modal'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type='text'
          placeholder='Image URL'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder='Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type='submit'>Add Entry</button>
        <button type='button' onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};
export default AddEntryModal;
