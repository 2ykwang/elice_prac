import React, {useState} from "react";
import './App.css';
import Sidebar from "./components/Sidebar";
import NoteForm from "./components/NoteForm";

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

export default function App() {
  return (
      <>
          <Sidebar/>
          <NoteForm/>
      </>
  );
}