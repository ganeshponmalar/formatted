import React from 'react'
import { useState } from 'react';

const Beautify = () => {
  const [userInput, setUserInput] = useState('');

  const [formattedJson, setFormattedJson] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {

    setUserInput(event.target.value);

  };

  const beautifyJson = () => {

    try {

      const parsedJson = JSON.parse(userInput);
     console.log(parsedJson)

      const beautifiedJson = JSON.stringify(parsedJson, null, 2);
      console.log(beautifiedJson)

      setFormattedJson(beautifiedJson);

      setErrorMessage('');

    } catch (error) {

      setFormattedJson('');

      setErrorMessage('Invalid JSON format');
    }
  };

  return (
    <div>
      <h1>Beautify JSON</h1>

      <textarea id="w3review" name="w3review" rows="8" cols="80"

        value={userInput}

        onChange={handleInputChange}

        placeholder="Enter your JSON here..."
      />
      
      <button onClick={beautifyJson}>Beautify JSON</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {formattedJson && <pre>{formattedJson}</pre>}

    </div>
  );
};

export default Beautify;
