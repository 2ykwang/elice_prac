import React, {useState} from "react";
import NoteFormHeader from './NoteFormHeader';
import NoteFormContent from './NoteFormContent';
import MarkdownPreview from './MarkdownPreview';

const NoteForm = () =>{
    const [content,setContent] = useState("");

    return (
        <div className="note-form">
            <NoteFormHeader/>
            <NoteFormContent
                onChange={
                    (e)=>{
                        setContent(e.target.value);
                        console.log(e.target.value);
                    }
            }/>
            <MarkdownPreview content={content}/>
        </div>
    )
}
export default NoteForm;