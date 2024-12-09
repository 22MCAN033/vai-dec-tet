import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");  // State for name input
  const [email, setEmail] = useState("");  // State for email input
  const [message, setMessage] = useState("");  // State for the server message

  // Handle form data changes
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    const formData = {
      name,
      email,
    };

    // Send data to the backend
    axios
      .post("http://localhost:5000/api/submit", formData) // Backend API endpoint
      .then((response) => {
        setMessage(response.data.message); // Display success message from backend
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("There was an error submitting the form.");
      });
  };

  return (
    <div>
      <h1>Submit Your Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;
