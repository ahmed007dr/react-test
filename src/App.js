import './App.css';
import Posts from './componantes/Posts';
import CreatePost from './componantes/CreatePost';

function App() {
  // logic
  const name = 'ahmed mohamed'
  const title = 'learn python basic'

  const hello = () =>{
    console.log('welcome')
  }
  const hello2 = (name) => {
    console.log('hello ${name}')
  }

  const hello3 = (name) => {
    console.log('hello ${name}')
  }
  //render logic + frontend
  return (
    <div className="App">
      <>
      <button onClick={hello}>CLICK</button>
      <button onClick={hello2 (' ahmed ')}> Click Parameter </button>
      <button onClick={() => hello3 ("ahmed 3")}> Click Parameter3 </button>
{/* 
        <Posts name={name} title={title}/>

        <CreatePost /> */}
      </>
    </div>
  );
}

export default App;
