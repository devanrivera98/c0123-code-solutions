import logo from './logo.svg';
import './App.css';
import './CustomButton.css'
import CustomButton from './customButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='All-buttons'>
          <CustomButton color='blue' text='I'></CustomButton>
          <CustomButton color='red' text='Know' ></CustomButton>
          <CustomButton color='green' text='React' ></CustomButton>
        </div>
      </header>
    </div>
  );
}

export default App;
