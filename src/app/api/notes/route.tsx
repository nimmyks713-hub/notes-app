import { NextResponse } from 'next/server';

let notes: { id: number; title: string; content: string }[] = [];
let idCounter = 1;

export async function GET() {
  return NextResponse.json(notes);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newNote = { id: idCounter++, ...body };
  notes.push(newNote);
  return NextResponse.json(newNote, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  notes = notes.filter(note => note.id !== id);
  return NextResponse.json({ message: 'Note deleted' });
}
