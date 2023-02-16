import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to={`/`}>
        <h1>👩Note</h1>
      </Link>
      <Link to={`/write`}>
        <button>글쓰기</button>
      </Link>
    </header>
  )
}
