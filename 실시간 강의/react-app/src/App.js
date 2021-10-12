import React, {useState} from 'react';

import {Article} from './components/Article';
import {Control} from './components/Control';
import {Create} from './components/Create';
import {Header} from './components/Header';
import {Nav} from './components/Nav';
import {Update} from './components/Update';

const App = props => {
    const [id, setId] = useState(2);
    const [mode, setMode] = useState('WELCOME');

    const [topics, setTopics] = useState([
        {id: 1, title: 'html', body: 'html is ..'},
        {id: 2, title: 'css', body: 'css is ..'},
    ]);
    const [nextId, setNextId] = useState(topics.length);

    console.log('run App', id);
    function selectHandler(_id) {
        if (_id === undefined) {
            setMode('WELCOME');
        } else {
            setId(_id);
            setMode('READ');
        }
    }
    let articleComp = <Article title="Welcome" body="Welcome is ..."></Article>;
    if (mode === 'READ') {
        var title, body;
        for (var i = 0; i < topics.length; i++) {
            var item = topics[i];
            if (item.id === id) {
                title = item.title;
                body = item.body;
            }
        }
        articleComp = <Article title={title} body={body}></Article>;
    } else if (mode === 'CREATE') {
        function createHandler(_title, _body) {
            // topics.push({title:_title, body:_body});
            // setTopics(topics);
            var newTopics = [...topics];
            newTopics.push({id: nextId, title: _title, body: _body});
            setTopics(newTopics);
            setMode('READ');
            setId(nextId);
            setNextId(nextId + 1);
        }
        articleComp = <Create onCreate={createHandler}></Create>;
    } else if (mode === 'UPDATE') {
        function updateHandler(title, body) {
            alert(title + body);
        }
        var data;
        for (let i = 0; i < topics.length; i++) {
            var topic = topics[i];
            if (topic.id === id) {
                data = topic;
            }
        }
        articleComp = <Update onUpdate={updateHandler} data={data}></Update>;
    }

    function changeHandler(_mode) {
        if (_mode === 'DELETE') {
            // 삭제한다.
            const newTopics = [];
            
            for(let topic in topics){
                console.log(topic.id);
            }
            setTopics(newTopics);
            setMode('WELCOME');
        } else if (_mode === 'UPDATE') {
            setMode('UPDATE');
        } else {
            setMode(_mode);
        }
    }

    return (
        <div>
            <Header title="html" onSelect={selectHandler}></Header>
            <Nav src={topics} onSelect={selectHandler}></Nav>
            {articleComp}
            <Control onChangeMode={changeHandler}></Control>
        </div>
    );
};

export default App;
