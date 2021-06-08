import './App.css';
import Weather from './Weather.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello from React </h1>
        
        <Weather city="Paris"/>
        
      </header>
    </div>
  );
}

export default App;
