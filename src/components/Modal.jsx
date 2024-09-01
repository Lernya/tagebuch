import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, entry, onClose }) => {
  if (!isOpen || !entry) return null;

  console.log("Modal entry:", entry); // Debugging

  const { title, content, date, image } = entry;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-black rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">{title || "No Title"}</h2>
        {image && (
          <img
            src={image}
            alt="Modal content"
            className="w-full h-auto mb-4 rounded-lg"
          />
        )}
        <p className="mb-4">{content || "No Content"}</p>
        {date && (
          <p className="text-sm text-gray-400">
            {new Date(date).toLocaleDateString()}
          </p>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
