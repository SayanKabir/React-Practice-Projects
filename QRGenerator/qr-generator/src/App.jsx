import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QRCard from './components/QRCard';

function App() {

  const [input, setInput] = useState('');

  function refreshQR(e) {
    setInput(e.target.value);
  }

  return (
    <div className='mainDiv'>
      <QRCard value={input}/>
      <input id='textInput'
        autoFocus
        value={input}
        onChange={refreshQR}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            refreshQR(e);
          } else if (e.key === 'Escape') {
            setInput('');
          }
        }}
      />
    </div>
  )
}

export default App
