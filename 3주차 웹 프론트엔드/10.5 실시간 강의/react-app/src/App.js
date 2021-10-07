import React from 'react';
import './App.css';

/*
  재사용성이 증가한다.
*/
function Nav(props) {
  console.log('🚀 ~ file: App.js ~ line 8 ~ Nav ~ props', props);

  let lis = [];
  for (let i = 0; i < props.src.length; i++) {
    let item = props.src[i];
    lis.push(
      <li key={item.id}> 
        <a href={item.src}>{item.title}</a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  console.log('🚀 ~ file: App.js ~ line 25 ~ Article ~ props', props);

  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Header(props) {
  function aHandler(){
    alert('hi');
  }
  return (
    <header>
      <h1>
        <a href="index.html" onClick={aHandler}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function App() {
  var topics = [
    {id: 1, title: 'html', body: 'html is ...', src: '1.html'},
    {id: 2, title: 'css', body: 'css is ...', src: '2.html'},
  ]; 
  return (
    <React.Fragment>
      <Header title="title"></Header>
      <Nav src={topics}></Nav>
      <Article title="HTML" body="HTML is ..."></Article>
      <Article title="CSS" body="CSS is ..."></Article>
    </React.Fragment>
  );
}

export default App;
