import React from 'react';

const DiaryCard = ({ entry, onClick }) => {
  return (
    <div className='diary-card' onClick={() => onClick(entry)}>
      <img src={entry.image} alt={entry.title} />
      <h3>{entry.title}</h3>
      <p>{entry.date}</p>
      <p>{entry.content}</p>
    </div>
  );
};
export default DiaryCard;
