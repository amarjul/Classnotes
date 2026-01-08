import './NoteList.css';

export default function NoteList({ notes, onDelete }) {
  return (
    <ul className="note-list">
      {notes.map(n => (
        <li key={n.id} className="note-item">
          <span className="note-text">{n.text}</span>
          <button
            className="delete-btn"
            aria-label={`Delete note ${n.id}`}
            onClick={() => onDelete && onDelete(n.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
