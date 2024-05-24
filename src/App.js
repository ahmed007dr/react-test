import './App.css';
import Posts from './componantes/Posts';
import CreatePost from './componantes/CreatePost';

function App() {
  // logic
  const name = 'ahmed mohamed'
  const title = 'learn python basic'

  //render logic + frontend
  return (
    <div className="App">
      <>
        <Posts name={name} title={title}/>

        <CreatePost />
      </>
    </div>
  );
}

export default App;
