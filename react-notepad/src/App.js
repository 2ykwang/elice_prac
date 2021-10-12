import React, {useState} from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import NoteForm from "./components/NoteForm";
import { nanoid } from 'nanoid'
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
const makeTestData = ()=>{
    const notes = [];
    for(let i = 0; i <33; i++){
        notes.push({id: nanoid(), content: `테스트 노트${i}\ntest${i}`, date: `2021-10-12 21:26:${i}`})
    }
    return notes;
}

export default function App() {
    const notes = makeTestData();

    return (
        <>
            <div className="container">
                <Sidebar notes={notes}/>
                <NoteForm/>
            </div>
        </>
    );
}