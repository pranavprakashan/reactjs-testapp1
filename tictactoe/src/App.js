import './App.css';
import Square from './Components/Square';

function App() {
  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square num={0} val={"x"}/>
          <Square />
          <Square />
        </div>
        <div className="row">
        <Square />
        <Square />
        <Square />

        </div>
        <div className="row">
        <Square />
        <Square />
        <Square />

        </div>

      </div>
    </div>
  );
}

export default App;
