import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete, MdEdit } from 'react-icons/md'

export default function Note({ note }) {
  const [cat, SetCat] = useState(false)

  function onDelete() {
    if (window.confirm('정말 삭세하시겠습니까?')) {
      fetch(`http://localhost:3001/notes/${note.id}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
          SetCat(true)
        }
      })
    }
  }

  if (cat === true) {
    return null
  }

  return (
    <li className="note">
      <h3>{note.title}</h3>
      <p>{note.detail}</p>
      <div>
        <span>{note.date}</span>
        <Link to={`/edit`} state={note}>
          <MdEdit />
        </Link>
        <a href="#x">
          <MdDelete onClick={onDelete} />
        </a>
      </div>
    </li>
  )
}
