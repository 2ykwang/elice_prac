import React from "react";
import NoteList from "./NoteList";
const Sidebar = (props) =>{
    const {notes} = props;

    return (
        <div className="sidebar">
            <NoteList notes={notes}/>
        </div>
    )
}

export default Sidebar;