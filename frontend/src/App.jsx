import { useState } from 'react'
import { useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AddNoteForm from './AddNoteForm.jsx'
import NoteList from './NoteList.jsx'
import { getNotes, addNote, deleteNote } from './api.js'

function App() {
  const [notes, setNotes] = useState([]); 
  
  useEffect(() => { 
    getNotes().then(setNotes); 
  }, []); 
  
  async function handleAdd(text) { 
    const newNote = await addNote(text); 
    setNotes([...notes, newNote]); 
  } 

  async function handleDelete(id) {
    const ok = await deleteNote(id);
    if (ok) setNotes(notes.filter(n => n.id !== id));
  }
  
  return ( 
    <div> 
      <h1>ClassNotes</h1> 
      <AddNoteForm onAdd={handleAdd} /> 
      <NoteList notes={notes} onDelete={handleDelete} /> 
    </div> 
  );
}

export default App
