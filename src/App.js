import './App.css';
import Posts from './componantes/Posts';
import CreatePost from './componantes/CreatePost';
import { useState } from 'react';
function App() {
  // logic
  let name = ' ahmed mohamed '
  let title = ' python django '

  //render logic + frontend
  return (
    <div className="App">
      <>
 
        <Posts title = {title} name = {name} />
        <CreatePost />
      </>
    </div>
  );
}

export default App;
