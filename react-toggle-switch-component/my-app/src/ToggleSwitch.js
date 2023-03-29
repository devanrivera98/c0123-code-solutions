import { useState } from "react";
import './ToggleSwitch.css'

export default function ToggleSwitch() {
  let [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked)
  }
  return (
    <div className="div-box">
      <lable className="switch">
        <input type={clicked ? "checkbox" : "unchecked"} checked></input>
        <span onClick={handleClick} className="slider round"></span>
        <div className="text-box">{clicked ? "ON" : "OFF"}</div>
      </lable>
    </div >
  )
}
