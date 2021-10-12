import React from "react";

const NoteFormContent = (props) => {

    const {onChange, defaultValue} = props;
    return (
        <textarea
            id="noteEditor"
            value={defaultValue}
            onChange={onChange}
        />
    )
}

export default NoteFormContent;