import React from "react";
import NoteList from "./NoteList";

const Sidebar = (props) => {
    const {notes, onSelectNote} = props;

    return (
        <div className="sidebar">
            <NoteList onSelectNote={onSelectNote} notes={notes}/>
        </div>
    )
}

export default Sidebar;