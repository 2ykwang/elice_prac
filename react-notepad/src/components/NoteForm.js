import React from "react";
import NoteFormHeader from './NoteFormHeader';
import NoteFormContent from './NoteFormContent';

const NoteForm = () =>{
    return (
        <div className="note-form">
            <NoteFormHeader/>
            <NoteFormContent/>
        </div>
    )
}
export default NoteForm;