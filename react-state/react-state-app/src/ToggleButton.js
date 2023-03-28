import './ToggleButton.css';
import { useState } from "react";

export default function ToggleButton({text, color}) {
  let [clicked, setClicked] = useState(false);
  console.log('useState', clicked)
  function handleClick() {
    console.log( 'before calling the setter', clicked)
    setClicked(!clicked);
    console.log( 'after the setter', clicked)
  }

  return (
    <button style={{backgroundColor: color}} className={clicked ? "not-clicked": "none"} onClick={handleClick}>{clicked ? 'Hide' : 'Show'} </button>
  )
}
