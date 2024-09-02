import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, entry, onClose }) => {
  if (!isOpen || !entry) return null;

  console.log("Modal entry:", entry); // Debugging

  const { title, content, date, image } = entry;

  return ReactDOM.createPortal(
    <div id="modal" className="fixed inset-0 flex items-center justify-center bg-opacity-75">
      <div id="modalwindow" className="rounded-lg shadow-lg p-6 pb-0 w-11/12 md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">{title || "No Title"}</h2>
        <div id="entryblock">
        {image && (
          <img
            src={image}
            alt="Modal content"
            className="w-full h-auto mb-4 rounded-lg"
          />
        )}
        <p id="entrycontent" className="mb-4">{content || "No Content"}</p>
        {date && (
          <p className="text-sm text-gray-400">
            {new Date(date).toLocaleDateString()}
          </p>
        )}
        </div>
        <button id="modalbutton"
          onClick={onClose}
          className="mt-4 px-4 py-1 bg-blue-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
