'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Note = { id: number; title: string; content: string };

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const res = await fetch('/api/notes');
    const data = await res.json();
    setNotes(data);
  };

  const deleteNote = async (id: number) => {
    await fetch('/api/notes', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
        <div style={{backgroundColor:"#20B2AA"}}>
      <h1 style={{textAlign:"center"}}>Your notes...</h1>
      <Link
        href="/notes/addnotes" style={{textDecoration:"none",color:"maroon",fontWeight:"bold",fontSize:"20px",marginRight:"70px"}}>
        Add New Note
      </Link>
      <Link
        href="/" style={{textDecoration:"none",color:"maroon",fontWeight:"bold",fontSize:"20px"}}>
        Home
      </Link>
      </div>
      {notes.map((note) => (
        <div key={note.id} className="border p-2 rounded container mt-5" style={{backgroundColor:"whitesmoke"}}>
          <h3>{note.title}</h3><hr/>
          <p>{note.content}</p>
          <button
            onClick={() => deleteNote(note.id)}
            className="bg-danger rounded">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}