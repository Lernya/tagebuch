import React from 'react';
import DiaryCard from './DiaryCard.jsx';

const DiaryList = ({ entries, onEntryClick }) => {
  return (
    <div className='diary-list'>
      {entries.map((entry) => (
        <DiaryCard key={entry.date} entry={entry} onClick={onEntryClick} />
      ))}
    </div>
  );
};
export default DiaryList;
