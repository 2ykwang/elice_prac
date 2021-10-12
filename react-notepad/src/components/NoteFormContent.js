import React from "react";

const NoteFormContent = (props) =>{

    const {onChange} = props;

    return (
        <textarea
            id="noteEditor"
            onChange={onChange}
        />
    )
}

export default NoteFormContent;