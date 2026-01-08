import { useState } from "react";

export default function AddNoteForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Neue Notiz..."
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}
