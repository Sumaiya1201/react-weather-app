import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3c441078b02932d420eb39bb29615980";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      if (jsonResponse.cod === 200) {
        const result = {
          city: jsonResponse.name,
          temp: jsonResponse.main.temp,
          temp_min: jsonResponse.main.temp_min,
          temp_max: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feels_like: jsonResponse.main.feels_like,
          weather: jsonResponse.weather[0].description.toLowerCase(), // Use description for more detail
        };

        if (typeof updateInfo === "function") {
          updateInfo(result);
        } else {
          console.warn("updateInfo is not a function");
        }
      } else {
        alert("City not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (city.trim() !== "") {
      getWeatherInfo();
      setCity("");
    }
  };

  return (
    <div className="SearchBox" style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h3 style={{ color: 'white' }}>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          value={city}
          required
          onChange={handleChange}
          sx={{
            marginRight: 2,
            input: { color: 'white' },
            label: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
          }}
        />
        <br /><br />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
    </div>
  );
}
