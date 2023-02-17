import { Link } from 'react-router-dom'
import { MdDelete, MdEdit } from 'react-icons/md'
import moment from 'moment'
import 'moment/locale/ko'
import { db } from '../firebase'
import { doc, deleteDoc } from 'firebase/firestore'

export default function Note({ note }) {
  const date = moment(note.date.toDate()).format('YYYY-MM-D, a h:mm')

  async function onDelete() {
    if (window.confirm('정말 삭세하시겠습니까?')) {
      await deleteDoc(doc(db, 'notes', note.id))
    }
  }

  return (
    <li className="note">
      <h3>{note.title}</h3>
      <p>{note.detail}</p>
      <div>
        <span>{date}</span>
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
