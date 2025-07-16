import { useState } from 'react';
import ColorBox from './components/ColorBox';
import './index.css';

const generateColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

const App = () => {
  const [colors, setColors] = useState(
    Array(5).fill().map(() => ({ color: generateColor(), locked: false }))
  );

  const generatePalette = () => {
    setColors(colors.map(c => c.locked ? c : { ...c, color: generateColor() }));
  };

  const toggleLock = (index) => {
    const newColors = [...colors];
    newColors[index].locked = !newColors[index].locked;
    setColors(newColors);
  };

  return (
    <div className="app">
      <h1>🎨 Color Palette Generator</h1>
      <div className="palette">
        {colors.map((c, i) => (
          <ColorBox
            key={i}
            color={c.color}
            locked={c.locked}
            onToggleLock={() => toggleLock(i)}
          />
        ))}
      </div>
      <button onClick={generatePalette} className="generate-btn">Generate Palette</button>
    </div>
  );
};

export default App;
