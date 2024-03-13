import React from 'react'
import NavbarM from '../../../component/navbarMom/NavbarM'
import Notes from '../../../component/Notes/Notes'
import './note.css'
const Note = () => {
  return (
    <div className='note-cont'>
        <NavbarM/>
        <Notes/>
    </div>
  )
}

export default Note