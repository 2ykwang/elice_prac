import React from 'react';
import ReactMarkdown from 'react-markdown'

const MarkdownPreview = (props) => {
    const {content} = props;
    return (
        <>
            <div id="notePreview">
                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
            </div>
        </>
    )
}

export default MarkdownPreview;
