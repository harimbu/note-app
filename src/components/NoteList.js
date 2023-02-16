// import db from '../db/data.json'
import { useEffect, useState } from 'react'
import Note from './Note'

export default function NoteList() {
  const [notes, SetNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then(res => res.json())
      .then(data => SetNotes(data))
  }, [])

  return (
    <ul className="note_list">
      {notes.map(note => (
        <Note note={note} key={note.id} />
      ))}
    </ul>
  )
}
