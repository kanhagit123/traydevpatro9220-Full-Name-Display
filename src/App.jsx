import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // double-check both fields are filled (button is disabled when empty, but extra guard)
    if (!firstName.trim() || !lastName.trim()) return
    setFullName(`${firstName.trim()} ${lastName.trim()}`)
  }

  return (
    <div className="container">
      <h1 className="title">Full Name Display</h1>

      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="input"
            aria-label="First Name"
          />
        </label>

        <label className="label">
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="input"
            aria-label="Last Name"
          />
        </label>

        <button 
  type="submit" 
  disabled={!firstName.trim() || !lastName.trim()}
>
  Submit
</button>

      </form>

      {fullName && (
        <p className="result">Full Name: <strong>{fullName}</strong></p>
      )}
    </div>
  )
}
