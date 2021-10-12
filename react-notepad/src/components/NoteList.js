import React from "react";
import Note from './Note';

const NoteList = (props) => {
    const {notes, onSelectNote} = props;

    const handleNoteClick = (e) => {
        //노트 id 값으로 구분
        const target = e.currentTarget;
        onSelectNote(target.dataset.index);
        e.preventDefault();
    }
    return (
        <div className="note-list">
            {notes.map((x) =>
                <Note
                    key={x.id}
                    id={x.id}
                    content={x.content}
                    date={x.date}
                    onClick={handleNoteClick}
                />
            )}
        </div>
    )
}

export default NoteList