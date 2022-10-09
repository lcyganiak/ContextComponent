import logo from './logo.svg';
import './App.css';
import ListPosts from './components/ListPosts';
import ContextComponent from './Store/GlobalStore';
import OnePost from './components/OnePost';

function App() {

  return (
    <ContextComponent>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ListPosts></ListPosts>
      <OnePost></OnePost>
      
    </div>
    </ContextComponent>
  );
}

export default App;
