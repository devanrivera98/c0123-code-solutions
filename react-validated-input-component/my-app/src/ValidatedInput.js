import { useState } from "react";
import './ValidatedInput.css'

export default function ValidatedInput() {
  const [passwordEntry, setPasswordEntry] = useState('');

  function passwordChange(e) {
    setPasswordEntry(e.target.value)
  }
  let verified = false
  let text;

  if (passwordEntry.length >= 8) {
    verified = true
    text = undefined
  } else if (passwordEntry.length > 0) {
    text = "Password is too short"
  } else {
    text = "Password is required"
  }

  return (
    <>
    <div className="password-box">
      <label>Password:</label>
      <input onChange={passwordChange} value={passwordEntry} placeholder="Password" type="password"></input>
      <div className="emoji">{verified ? "\u2705" : "\u274C"}</div>
    </div>
    <div className="pop-up-text">{text}</div>
    </>
  )
}
