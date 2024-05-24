import './App.css';
import Posts from './components/Posts';
import { useState } from 'react';
import CreatePost from './components/CreatePost';

function App() {
  // logic
  let name = ' ahmed mohamed ';
  let title = ' python django ';
  const [text, setText] = useState('');
  const [posts, setPost] = useState([]);

  // render logic + frontend
  return (
    <div className="App">
      <>
        <Posts title={title} name={name} />
        <CreatePost posts={posts} setPost={setPost} text={text} setText={setText} />
      </>
    </div>
  );
}

export default App;
