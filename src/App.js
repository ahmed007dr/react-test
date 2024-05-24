import './App.css';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import { useState } from 'react';

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
        <Posts title={title} posts={posts} />
        <CreatePost posts={posts} setPost={setPost} text={text} setText={setText} />
      </>
    </div>
  );
}

export default App;
