import React from "react";


/* timestamp 날짜 포멧팅 */

const formatedDate = (timestamp) => {
    const a = new Date(timestamp);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getUTCFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    return `${year} ${month} ${date}`;
}
const generateHeaderAndSummary = content => {
    const splitLines = content.split(/\r?\n/);
    const header = splitLines[0].substring(0, 20);
    const summary = splitLines.slice(1, splitLines.length).join('').substring(0, 40);

    return {header, summary}
}
const Note = (props) => {
    const {onClick} = props;
    const {id, content, date} = props;

    const noteDate = formatedDate(date);
    const headerAndSummary = generateHeaderAndSummary(content);

    return (
        <a
            className="note-list-item"
            data-index={id}
            href={"#!"}
            onClick={onClick}>
            <div>
                <div className="note-list-item-header">{headerAndSummary.header}</div>
                <div className="note-list-item-date">{noteDate}</div>
                <div className="note-list-item-content">{headerAndSummary.summary}</div>
            </div>
        </a>
    )
}
export default Note;