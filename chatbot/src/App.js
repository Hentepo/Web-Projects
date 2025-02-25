import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();  // Prevents the default form submission behavior
    setSubmittedValue(inputValue);  // Store the submitted value
    setInputValue('');  // Clear the input field after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="textInput">Enter text:</label>
        <input
          type="text"
          id="textInput"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedValue && <p>You submitted: {submittedValue}</p>}
    </div>
  );
};

const userInput = InputField;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <InputField />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
