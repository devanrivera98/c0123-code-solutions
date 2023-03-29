import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleGreenCustomClick(text) {
    alert(`Clicked green ${text}`)
  }
  function handleRedCustomClick(text) {
    alert(`Clicked green ${text}`)
  }
  function handleBlueCustomClick(text) {
    alert(`Clicked green ${text}`)
  }
  return (
    <div>
      <CustomButton onCustomClick={handleGreenCustomClick} color='green' text='This'>This</CustomButton>
      <CustomButton onCustomClick={handleRedCustomClick} color='red' text='is'>is</CustomButton>
      <CustomButton onCustomClick={handleBlueCustomClick} color='blue' text='button'>button</CustomButton>
    </div>
  );
}

export default App;

//Instructor solution without handleFunction
//onCustomClick={(text) => alert()
