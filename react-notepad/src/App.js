import React, {useState} from "react";
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

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

const DefaultLayout = (props) =>{
    const {selectNote, notes, onSelectNote, onContentChange} = props;
    // className 전달 받음
    const {className} = props;

    return (
    <div className={className}>
        <Sidebar
            onSelectNote={onSelectNote}
            notes={notes}
        />
        {selectNote && <NoteForm note={selectNote} onContentChange={onContentChange}/>}
    </div>
)};
const MainPage = (props) =>{

    return (
        <> </>
    )
};

const ViewNotePage = (props) =>{
    return (
        <>

        </>
    )
};

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
            <BrowserRouter>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/view/:id" component={ViewNotePage}/>
            </BrowserRouter>
        </div>
    );
}