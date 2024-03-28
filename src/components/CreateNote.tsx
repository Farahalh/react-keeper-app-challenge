import React from "react";
import Note from "./Note";
import { NoteProps } from "./Note";

function createNote(note: NoteProps) {
  return <Note key={note.id} title={note.title} content={note.content} />;
}
