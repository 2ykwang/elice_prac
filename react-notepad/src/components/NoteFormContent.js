import React, {useState} from "react";

const NoteFormContent = (props) => {

    const {onChange, defaultValue} = props;
    return (
        <textarea
            id="noteEditor"
            value={defaultValue}
            spellCheck="false"
            onKeyDown={(e)=>{
                // to-do: 현재 커서 tab 삽입
                // if(e.key === "Tab"){
                //     //tab 키 기존 기능 무시
                //     e.preventDefault();
                //     setText((current)=> current+'    ');
                // }
            }}
            onChange={(e)=>
            {
                onChange(e);
            }}
        />
    )
}

export default NoteFormContent;