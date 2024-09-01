import React, { useEffect, useState } from 'react';
import DiaryList from './Components/DiaryList';
import AddEntryModal from './Components/AddEntryModal';
import EntryModal from './Components/EntryModal';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showAddEntryModal, setShowAddEntryModal] = useState(false);
  const [showEntryModal, setShowEntryModal] = useState(false);

  // Load entries from localStorage on mount
  useEffect(() => {
    const storedEntries =
      JSON.parse(localStorage.getItem('diaryEntries')) || [];
    setEntries(storedEntries);
  }, []);

  // Function to add entry
  const addEntry = (newEntry) => {
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
  };

  return (
    <div className='app-container p-4 bg-indigo-400'>
      <button onClick={() => setShowAddEntryModal(true)}>Add Entry</button>
      <DiaryList
        entries={entries}
        onEntryClick={(entry) => {
          setSelectedEntry(entry);
          setShowEntryModal(true);
        }}
      />
      {showAddEntryModal && (
        <AddEntryModal
          onClose={() => setShowAddEntryModal(false)}
          onAddEntry={addEntry}
        />
      )}
      {showEntryModal && (
        <EntryModal
          entry={selectedEntry}
          onClose={() => setShowEntryModal(false)}
        />
      )}
    </div>
  );
};
export default App;
