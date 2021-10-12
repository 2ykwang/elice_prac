import React, { useState } from 'react';

export const Update = props => {

  const [title, setTitle] = useState(props.data.title);
  const [body, setBody] = useState(props.data.body);

  console.log('title', title);
  function submitHandler(ev) {
    ev.preventDefault();

    const title = ev.target.title.value;
    const body = ev.target.body.value;

    props.onUpdate(title, body);
  }
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={submitHandler}>
        <p>
          <input
            type="text"
            name="title"
            value={title}
            onChange={function (ev) {
              setTitle(ev.target.value);
            }} />
        </p>
        <p>
          <textarea
            name="body"
            name="body"
            value={body}
            onChange={function (ev) {
              setBody(ev.target.value);
            }}
          ></textarea>
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    </article>
  );
};
