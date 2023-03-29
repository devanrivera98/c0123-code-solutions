// import { useState } from "react"

export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson)
  }

  return (
    <div style={{width: "200px", padding: "1rem"}}>
      <form onSubmit={handleSubmit}>
        <label>
          username
          <input name="username"></input>
        </label>
        <br />
        <label>
          password
          <input name="password"></input>
        </label>
        <br />
        <button type="submit">Uncontrolled</button>
      </form>
    </div>
  )
}
