import React from "react";

const Note = (props) => {
    const {onClick} = props;
    const {id, content, date} = props;
    return (
        <a className="note-list-item" href="#" onClick={onClick}>
            <div>
                <div className="note-list-item-header">{content}</div>
                <div className="note-list-item-date">{date}</div>
                <div className="note-list-item-content">{content}</div>
            </div>
        </a>
    )
}
export default Note;