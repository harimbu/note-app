import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { doc, updateDoc } from 'firebase/firestore'

export default function Edit() {
  const navigate = useNavigate()
  const note = useLocation().state
  const titleRef = useRef()
  const detailRef = useRef()

  function goBack(e) {
    e.preventDefault()
    navigate(-1)
  }

  async function onEdit(e) {
    e.preventDefault()
    const noteRef = doc(db, 'notes', note.id)
    await updateDoc(noteRef, {
      title: titleRef.current.value,
      detail: detailRef.current.value,
    })
    navigate('/')
  }

  return (
    <div className="container">
      <h2>노트 수정</h2>
      <form>
        <div>
          <label>제목</label>
          <input
            type="text"
            placeholder="제목"
            defaultValue={note.title}
            ref={titleRef}
          />
        </div>
        <div>
          <label>내용</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="내용"
            defaultValue={note.detail}
            ref={detailRef}
          ></textarea>
        </div>
        <div>
          <button onClick={goBack}>취소하기</button>
          <button onClick={onEdit}>수정하기</button>
        </div>
      </form>
    </div>
  )
}
