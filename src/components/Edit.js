import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Edit() {
  const navigate = useNavigate()
  const note = useLocation().state
  const titleRef = useRef()
  const detailRef = useRef()

  function goBack(e) {
    e.preventDefault()
    navigate(-1)
  }

  function onEdit(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/notes/${note.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...note,
        title: titleRef.current.value,
        detail: detailRef.current.value,
      }),
    }).then(res => {
      if (res.ok) {
        navigate('/')
      }
    })
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
