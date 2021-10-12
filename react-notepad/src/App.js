import React, {useState} from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import NoteForm from "./components/NoteForm";
import {nanoid} from 'nanoid'

/*
  컴포넌트 분리
  - App
    - Sidebar
      - NoteList
        - Note
    - NoteForm
      - NoteFormHeader
      - NoteFormContent
 */
const makeTestData = () => {
    const notes = [];
    for (let i = 0; i < 5; i++) {
        notes.push({id: nanoid(), content: `테스트 노트${i}\ntest${i}`, date: Date.now()})
    }
    return notes;
}
export default function App() {
    const [notes, setNotes] = useState(makeTestData());
    const [note, setNote] = useState(null);

    const handleSelectNote = (noteId) => {
        const findNote = notes.find(x => x.id === noteId)
        console.log(note === findNote);

        if (findNote) {
            setNote(findNote);
        } else {
            setNote(null);
        }
    }
    const handleNoteFormTextChanged = (text) => {
        if (note) {
            const copyArr = [...notes];
            const targetNote = copyArr.find(x => x.id === note.id);
            if (targetNote) {
                targetNote.content = text;
                setNotes(copyArr);
            }
        }
    }
    return (
        <div className="App">
            <Sidebar
                onSelectNote={handleSelectNote}
                notes={notes}
            />
            {note && <NoteForm note={note} onContentChange={handleNoteFormTextChanged}/>}
        </div>
    );
}