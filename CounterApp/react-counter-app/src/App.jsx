import { useState } from 'react'
import { FiRefreshCw} from 'react-icons/fi'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button className="btn" id="refresh-btn" onClick={() => setCount((count) => 0)}>
            <FiRefreshCw style={{ marginRight: '5px' }} />
            Reset
        </button>
      </div>
    </>
  )
}

export default App
