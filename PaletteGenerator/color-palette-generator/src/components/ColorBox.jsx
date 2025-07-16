const ColorBox = ({ color, locked, onToggleLock }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <p className="color-code" onClick={copyToClipboard}>{color}</p>
      <button onClick={onToggleLock} className="lock-btn">
        {locked ? '🔒' : '🔓'}
      </button>
    </div>
  );
};

export default ColorBox;
