import { useEffect, useState } from "react";
import Modal from "./Modal";

const EntryList = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const entries = JSON.parse(localStorage.getItem("formData")) || [];
    const sortedEntries = entries.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setEntries(sortedEntries);
  }, []);

  const handleCardClick = (entry) => {
    console.log("Clicked entry:", entry); // Debugging
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center cursor-pointer"
            onClick={() => handleCardClick(entry)}
          >
            {entry.imageUrl && (
              <img
                src={entry.imageUrl}
                alt={entry.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
            )}
            <h3 className="text-xl font-semibold">{entry.title}</h3>
            <p className="text-gray-500">
              {new Date(entry.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} entry={selectedEntry} onClose={closeModal} />
    </div>
  );
};

export default EntryList;
