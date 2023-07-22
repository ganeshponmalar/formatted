import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

  const Display = () => {

    const [formats, setFormats] = useState([]); // Initialize formats as an empty array

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {

      fetchFormats();

    }, []);
  
    const fetchFormats = async () => {

      try {
        const response = await axios.get('http://localhost:9000/aliens');

        setFormats(response.data);

        setLoading(false);

      } catch (error) {

        console.error('Error retrieving data:', error);

        setLoading(false);

      }
    };
  
    return (
      <div>

        {loading ? (

          <p>Loading...</p>

        ) : (

          <table className='styled-table '>

            <thead>

              <tr>

                <th>Key</th>

                <th>Value</th>
              </tr>

            </thead>

            <tbody>

              {formats.map((format) => {

                const { query } = format;

                const { query_string } = query;

                const { query: keyValue } = query_string;

                const keys = Object.keys(keyValue);
  
                return (

                  <tr key={format._id}>

                    {keys.map((key) => (

                      <React.Fragment key={key}>

                        <td>{key}</td>

                        <td>{keyValue[key]}</td>

                      </React.Fragment>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  };
 
export default Display






