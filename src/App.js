import './App.css';
import Posts from './componantes/Posts';
import CreatePost from './componantes/CreatePost';
import { useState } from 'react';
function App() {
  // logic
  const [name,setName] = useState('ahmed mohamed')

  const hello = () =>{
    setName('embabi')
    }




  //render logic + frontend
  return (
    <div className="App">
      <>
      <h1>hello {name}</h1>
      <button onClick={hello}>CLICK</button>
{/* 
        <Posts name={name} title={title}/>

        <CreatePost /> */}
      </>
    </div>
  );
}

export default App;
