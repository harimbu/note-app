import React from 'react'
import Header from './components/Header'
import NoteList from './components/NoteList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Write from './components/Write'
import Edit from './components/Edit'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/write" element={<Write />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
