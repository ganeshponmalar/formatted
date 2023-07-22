import React, { useState } from 'react';
import axios from 'axios';
import Display from './displayData';

export default function AddJson() {

  const [quoteNumber, setQuoteNumber] = useState('');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {

    e.preventDefault();
  
    try {

      const checkResponse = await axios.get('http://localhost:9000/aliens')

      
  
      if (checkResponse.data.length > 0) {

        setErrorMessage('The quote number is already in use');

        setShowSuccessMessage(false);

      } else {

        const response = await axios.post('http://localhost:9000/aliens', {

          QUOTE_NUMBER: quoteNumber

        });
        
        setShowSuccessMessage(true);
        
        setErrorMessage('');
        
        console.log(response.data);
        
      }
    } catch (error) {

      setErrorMessage('An error occurred while checking the quote number');
      setShowSuccessMessage(false);

      console.log(error);
    }
  
    setTimeout(() => {

      setShowSuccessMessage(false);
      setErrorMessage('');

    }, 3000);
  };
  

  return (
    <div>

      {showSuccessMessage && <p className='success-message'>Data added successfully!</p>}

      {errorMessage && <p className='error-message'>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>

        <label>
          QUOTE_NUMBER
          <input
            type='text'
            value={quoteNumber}
            onChange={(e) => setQuoteNumber(e.target.value)}
          />
        </label>


        <br />
        <button type='submit'>Submit</button>
      </form>
      <Display />
    </div>
  );
}
