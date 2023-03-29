import { useState } from "react"

export default function RegistrationFormControlled() {
  let [usernameEntry, setUsernameEntry] = useState('');

  let [passwordEntry, setPasswordEntry] = useState('');

  function handleSubmit(e) {
    e.preventDefault()
    console.log('state username', usernameEntry)
    console.log('state password', passwordEntry)
  }

  function usernameChange(e) {
    setUsernameEntry(e.target.value)
  }

  function passwordChange(e) {
    setPasswordEntry(e.target.value)
  }

  return (
    <div style={{ width: "200px", padding: "1rem" }}>
      <form onSubmit={handleSubmit}>
        <label>
          username
          <input onChange={usernameChange} value={usernameEntry} name="username"></input>
        </label>
        <br />
        <label>
          password
          <input onChange={passwordChange} value={passwordEntry} name="password"></input>
        </label>
        <br />
        <button type="submit">Controlled</button>
      </form>
    </div >
  )
}
