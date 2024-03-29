import React from "react";
import Note from "./Note";

interface NoteProps {
  key: number;
  title: string;
  content: string;
}

export default function createNote(note: NoteProps) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}
