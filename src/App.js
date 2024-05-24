import './App.css';
import Posts from './componantes/Posts';
import CreatePost from './componantes/CreatePost';

function App() {
  // logic
  let name = 'ahmed mohamed'

  const hello = () =>{
    name='ali'
    console.log(name)
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
