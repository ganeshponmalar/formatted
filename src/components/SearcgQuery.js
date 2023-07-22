import axios from 'axios';
import React, { useState } from 'react';

export default function SearchData() {

  const [query, setQuery] = useState('');

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');



  const handleFetchData = () => {

    setLoading(true);

    setErrorMessage('');

    axios

      .get(`http://localhost:9000/aliens/search?q=${query}`)

      .then(response => {

        const searchData = response.data;

        if (searchData.length === 0) {

          setErrorMessage('No matching data found');

        } else {
          
          setData(searchData);
          
        }
      })
      .catch(error => {

        console.log(error, 'Error');

        setErrorMessage('An error occurred');

      })

      .finally(() => {

        setLoading(false);

      });
  };

  return (
    <div className='container'>

      <label className='label' htmlFor='quoteNumber'>
        Search formatted json:
      </label>

      <textarea

        type='String'

        value={query}

        onChange={e => setQuery(e.target.value)}

        placeholder='Enter Key value'

        className='text-a'
      />


      <br />
      <button className='btn' onClick={handleFetchData}>

        Fetch Data
      </button>

      {loading && <p>Loading...</p>}

      {errorMessage && <p className='error-message'>{errorMessage}</p>}

      {data && (

        <div className='details'>

          <pre className='json-format'>{JSON.stringify(data, null, 2)}</pre>

        </div>
      )}
    </div>
  );
}

