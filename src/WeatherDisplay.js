import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather || !weather.current) {
    return <p>No weather data available. Please check the city name.</p>;
  }

  const { location, current } = weather;
  const { name } = location;
  const { temp_c, humidity, condition } = current;
  const { text: description, icon } = condition;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{name}</h2> {/* Display the city name */}
      <img src={icon} alt={description} /> {/* Display the weather icon */}
      <p>Temperature: {temp_c}°C</p> {/* Display the temperature */}
      <p>Humidity: {humidity}%</p> {/* Display the humidity */}
      <p>{description}</p> {/* Display the weather description */}
    </div>
  );
};

export default WeatherDisplay;

