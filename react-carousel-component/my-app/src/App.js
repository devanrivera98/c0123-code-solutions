import Carousel from './Carousel';
import './App.css';
import squirtle from "./images/007.png"
import charmander from "./images/004.png"
import pikachu from "./images/025.png"
import jiggypuff from "./images/039.png"

const characterList = [{ number: 1, name: 'squirtle', url: { squirtle } }, { number: 2, name: 'charmander', url: { charmander } }, { number: 3, name: 'pikachu', url: { pikachu } }, { number: 4, name: 'jiggypuff', url: { jiggypuff } }]

function App() {


  return (
    <Carousel characterList={characterList} />
  );
}

export default App;
