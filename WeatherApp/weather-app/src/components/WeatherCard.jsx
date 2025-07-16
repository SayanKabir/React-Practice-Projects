const WeatherCard = ({ weather }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{weather.name}</h2>
      <h3>{weather.weather[0].description}</h3>
      <h3>🌡️ {weather.main.temp} °C</h3>
    </div>
  );
};

export default WeatherCard;
