import logo from './logo.svg';
import image from './cookies.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Cookies</h1>
      <p>The most delecious cookies</p>
      <img className="cookies" src={image}></img>
      </header>
    </div>
  );
}

export default App;
