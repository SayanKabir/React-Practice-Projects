import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Joke fetched:', data);
        setJoke(data.joke);
      })
      .catch((err) => {
        console.error('Failed to fetch joke:', err);
      });
  }, []);

  return (
    <div className='mainDiv'>
      <h1>Dad Jokes</h1>
      <p>{joke}</p>
    </div>
  );
};

export default App;
