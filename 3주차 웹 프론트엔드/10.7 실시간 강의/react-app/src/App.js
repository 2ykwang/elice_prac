import './App.css';
import {useState} from 'react';

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Nav(props) {
  var lis = [];
  function aHandler(ev) {
    ev.preventDefault();
    props.onSelect(Number(ev.target.dataset.id));
  }
  for (var i = 0; i < props.src.length; i++) {
    var item = props.src[i];
    lis.push(
      <li key={item.id}>
        <a href={item.id + '.html'} data-id={item.id} onClick={aHandler}>
          {item.title}
        </a>
      </li>,
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Header(props) {
  function aHandler(ev) {
    ev.preventDefault();
    props.onSelect();
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
  //var mode = 'READ';
  let [id, setId] = useState(2)
  let [mode, setMode] = useState('WELCOME');

  var topics = [
    {id: 1, title: 'html', body: 'html is ..'},
    {id: 2, title: 'css', body: 'css is ..'},
  ];

  function selectHandler(id) {
    if (id === undefined) {
      mode = setMode('WELCOME');
    } else { 
      id = setId(id);
      mode = setMode('READ');
    }
    alert('select' + id);
  }
  var articleComp = <Article title="Welcome" body="Welcome is..."></Article>;

  if (mode === 'READ') {
    let title = '';
    let body = '';

    for (let i = 0; i < topics.length; i++) {
      const item = topics[i];
      if (item.id === id) {
        title = item.title;
        body = item.body;
        break;
      }
    }
    articleComp = <Article title={title} body={body}></Article>;
  }

  return (
    <div>
      <Header title="html" onSelect={selectHandler}></Header>
      <Nav src={topics} onSelect={selectHandler}></Nav>
      {articleComp}
    </div>
  );
}

export default App;
