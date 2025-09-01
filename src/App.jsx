import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (!firstName.trim() || !lastName.trim()) {
      setFullName(""); // don't display anything if incomplete
      return;
    }

    setFullName(`${firstName.trim()} ${lastName.trim()}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {fullName && (
        <p>
          Full Name: <strong>{fullName}</strong>
        </p>
      )}
    </div>
  );
}

export default App;
