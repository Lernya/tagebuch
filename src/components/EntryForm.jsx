import { useState } from "react";

const initialEntryForm = {
  title: "",
  date: "",
  imageUrl: "",
  content: "",
};

const EntryForm = () => {
  const [formState, setFormState] = useState(initialEntryForm);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingEntries = JSON.parse(localStorage.getItem("formData")) || [];
    const isEntryForToday = existingEntries.some(
      (entry) => entry.date === formState.date
    );
    if (isEntryForToday) {
      alert("An entry already exists for today. Please return the next day.");
      return;
    }
    const updatedEntries = [...existingEntries, formState];
    localStorage.setItem("formData", JSON.stringify(updatedEntries));
    setFormState(initialEntryForm);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="text-3xl">Add your Entry</h2>
      <label htmlFor="name">Titel</label>
      <input
        type="text"
        name="title"
        id="title"
        value={formState.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        value={formState.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="imageUrl">Image URL</label>
      <input
        type="url"
        name="imageUrl"
        id="imageUrl"
        value={formState.imageUrl}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Content</label>
      <textarea
        name="content"
        id="content"
        value={formState.content}
        onChange={handleChange}
        required
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default EntryForm;
