'use client'
import { Singers } from '../components/singers';
import { Singer } from '../components/singer.type';
import { useState, useEffect } from "react";
import axios from 'axios';

// Base URI for the API backend.
const GoodURL = 'http://localhost:8000'

const App = () => {

  // Load the page with the correct API endpoint.
  const [url, setUrl] = useState(GoodURL)

  // Start with no data loaded, no errors, and loading.
  const [data, setData] = useState<Singer[]>([]);
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Trigger the effect when the URL changes.
  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setIsLoading(true);
      // Try getting data from the API endpoint.
      try {
        const result = await axios(url);
        setData(result.data);
      }
      // If there was a problem, set error to True.
      catch (error) {
        setError(true);
      }
      // When finished, set loading to False.
      setIsLoading(false);
    };
    // Rerun fetchData when the effect is triggered.
    fetchData();
  }, [url]);

  return (
    <>
      <nav className='bg-red-50 py-4'>
        <p className='font-light text-4xl text-red-400  px-20 '>Frontend App</p>
      </nav>
      <main className='px-6 py-10 bg-red-100'>

        {/* Buttons for testing / demonstration purposes. */}
        <div className="grid justify-center gap-4">
          <p className="items-center">{url}</p>
          <button className="outline rounded items-center"
            onClick={() => setUrl(GoodURL)}>Good API endpoint</button>
          <button className="outline rounded items-center"
            onClick={() => setUrl('http://localhost:8001')}>Bad API endpoint</button>
        </div>

        {/* Results from API backend. */}
        <div className='flex justify-center items-center'>

          {/* If the results are loading, show "Loading..." */}
          {isLoading ? (
            <div className='flex items-center h-20'>Loading ...</div>
          ) : (
            // When the results are ready (loading is false), render the component.
            < Singers error={error} data={data} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
