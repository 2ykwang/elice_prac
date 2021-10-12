import React from "react";
import Note from './Note';

const NoteList = (props) =>{
    const {notes} = props;

    return (
        <>
            {notes.map((x)=>
                <Note id={x.id} content={x.content} date={x.date}/>
            )}
        </>
    )
}

export default NoteList