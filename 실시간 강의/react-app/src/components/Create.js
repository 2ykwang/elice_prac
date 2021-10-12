import React from 'react';

export const Create = props => {

  const handleSubmit = (ev) => {
    ev.preventDefault();
    var title = ev.target.title.value;
    var body = ev.target.body.value;
    props.onCreate(title, body);
  };
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="title" defaultValue="a" />
        </p>
        <p>
          <textarea name="body" defaultValue="b"></textarea>
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    </article>
  );
};
