'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddNotesPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });
  };

  return (
    <div style={{backgroundColor:'#F0F8FF'}}>
    <form onSubmit={handleSubmit} className='container mt-5'>
        <h2 style={{textAlign:'center'}}>Add your notes here...</h2>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-5">Title</label>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
        required
      />
      <label htmlFor="exampleFormControlTextarea1" className="form-label mt-5">Content</label>
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="form-control"
        required
      />
      <button type="submit" className="btn btn-info mt-5">
        Add Note
      </button>  
    </form>
    <div className='container'>
    <button className="btn btn-info mt-3" onClick={()=>{
        router.push('/notes')
      }}>
        Go to Notes page
      </button>
      </div>
      </div>
  );
}
