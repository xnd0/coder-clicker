import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button id="btn1">Write a line of code</button>


        <div>
        <button onClick={ActionLink}>
  Say Hello
</button>
        </div>

        <p>
          Welcome to Coder Clicker
        </p>



      </header>
    </div>
  );
}

export default App;
