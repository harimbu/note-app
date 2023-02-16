import moment from 'moment/moment'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Write() {
  const navigate = useNavigate()
  const titleRef = useRef()
  const detailRef = useRef()

  function goBack(e) {
    e.preventDefault()
    navigate(-1)
  }

  function onWrite(e) {
    e.preventDefault()

    fetch('http://localhost:3001/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        detail: detailRef.current.value,
        date: moment().format('YYYY.MM.DD HH:mm:ss'),
      }),
    }).then(res => {
      if (res.ok) {
        navigate('/')
      }
    })
  }

  return (
    <div className="container">
      <h2>노트 작성</h2>
      <form>
        <div>
          <label>제목</label>
          <input type="text" placeholder="제목" ref={titleRef} />
        </div>
        <div>
          <label>내용</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="내용"
            ref={detailRef}
          ></textarea>
        </div>
        <div>
          <button onClick={goBack}>취소하기</button>
          <button onClick={onWrite}>작성하기</button>
        </div>
      </form>
    </div>
  )
}
