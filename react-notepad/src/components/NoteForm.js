import React, {useEffect, useState} from "react";
import NoteFormHeader from './NoteFormHeader';
import NoteFormContent from './NoteFormContent';
import MarkdownPreview from './MarkdownPreview';

const NoteForm = (props) => {
    const {onContentChange, note} = props;
    const [content, setContent] = useState(note.content);
    useEffect(() => setContent(note.content), [note.content]);

    return (
        <div className="note-form">
            <NoteFormHeader/>
            <NoteFormContent
                onChange={
                    (e) => {
                        const text = e.target.value;
                        setContent(text);
                        onContentChange(text);
                    }
                }
                defaultValue={content}
            />
            <MarkdownPreview content={content}/>
        </div>
    )
}
export default NoteForm;