import React, { useState } from 'react'
import Notes from './Notes'

const AppNotes = (props) => {

    const [notes, setNotes] = useState(props.notes)
    const[newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const notesToShow = showAll ? notes : notes.filter(note => note.important)

    const rows = () => notesToShow.map(note =>
      <Notes
        key={note.id}
        note={note}
      />
    )
    
    const changeImp = (event) => {
      event.preventDefault()
      console.log(showAll)
      setShowAll(!showAll)
    }

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
          content : newNote,
          date : new Date().toISOString(),
          important : Math.random() > 0.5,
          id : notes.length + 1,
        }
      setNotes(notes.concat(noteObject))
      setNewNote('')
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

  
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {rows()}
        </ul>
        <form onSubmit={addNote}>
            <input 
            value={newNote}
            onChange={handleNoteChange}
            />
            <button type="submit">save</button>

        </form>
        <button onClick={changeImp}>
            show important notes
        </button>

      </div>
    )
  }

export default AppNotes