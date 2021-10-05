import './App.css';

/*
  재사용성이 증가한다.
  
*/
function Navigator(){
  return (
  <nav>
    <ol>
      <li><a href="1.html">html</a></li>
      <li><a href="1.html">css</a></li>
    </ol>
  </nav>
)}

function ArticleTag(){
  return(
    <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
)}

function App() {
  return (
    <div>
      <header><h1><a href='index.html'>WEB</a></h1></header>
      <Navigator></Navigator>
      <ArticleTag></ArticleTag>
      <ArticleTag></ArticleTag>
    </div>
  );
}

export default App;
