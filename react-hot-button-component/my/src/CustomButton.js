import { useState } from "react";
import './CustomButton.css'

export default function CustomButton({text}) {
  let [isClicked, setClicked] = useState(0)

  function handleClick() {
    setClicked(isClicked + 1)
  }

  let classColor;
  if (isClicked >= 18) {
     classColor = "white"
  } else if (isClicked >= 15) {
    classColor = "yellow"
  } else if (isClicked >= 12) {
    classColor = "orange"
  } else if (isClicked >= 9) {
    classColor = "red"
  } else if (isClicked >= 6) {
    classColor = "purple"
  } else if (isClicked >= 3) {
    classColor = "blue"
  }

  return (
    <button onClick={handleClick} className={classColor} text={text}>{text}</button>
  )
}
