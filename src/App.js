import './App.css';
import Home from './home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header_inr'>
          <div>BreedBuddy</div>
        </div>
      </header>
      <div style={{height: '800px'}}>
        <Home/>
      </div>
    </div>
  );
}

export default App;
