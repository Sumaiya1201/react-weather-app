import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function InfoBox({ info }) {
  const imageMap = {
    haze: "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // haze
    rain: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",     // rain
    clear: "https://plus.unsplash.com/premium_photo-1710151657348-0ad8ca4c4fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lYWRvd3xlbnwwfHwwfHx8MA%3D%3D",      // clear sky
    snow: "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",       // snow
    mist: "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D",       // mist
    smoke: "https://plus.unsplash.com/premium_photo-1678066986924-120fdbdf3439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21va3klMjB3ZWF0aGVyfGVufDB8fDB8fHww",      // smoke
    thunderstorm: "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // thunderstorm
    clouds: "https://images.unsplash.com/photo-1724480157827-f406b0fd0d6f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,    // generic clouds
    default: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",    // fallback
  };

  // Normalize description like "overcast clouds" → "clouds"
  const mapDescriptionToKey = (description) => {
    if (!description) return "default";
    if (description.includes("cloud")) return "clouds";
    if (description.includes("rain")) return "rain";
    if (description.includes("clear")) return "clear";
    if (description.includes("snow")) return "snow";
    if (description.includes("mist")) return "mist";
    if (description.includes("smoke")) return "smoke";
    if (description.includes("haze")) return "haze";
    if (description.includes("thunder")) return "thunderstorm";
    return "default";
  };

  const weatherKey = mapDescriptionToKey(info.weather);
  const weatherImage = imageMap[weatherKey] || imageMap["default"];

  return (
    <Card
      className="InfoBox"
      sx={{ maxWidth: 400, margin: "20px auto", backgroundColor: "#1e1e1e", color: "white" }}
    >
      <img
        src={`${weatherImage}?auto=format&fit=crop&w=600&q=80`}
        alt={weatherKey}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h5">{info.city}</Typography>
        <Typography>Weather: {info.weather}</Typography>
        <Typography>Temperature: {info.temp}°C</Typography>
        <Typography>Humidity: {info.humidity}%</Typography>
        <Typography>Feels like: {info.feels_like}°C</Typography>
        <Typography>Min: {info.temp_min}°C | Max: {info.temp_max}°C</Typography>
      </CardContent>
    </Card>
  );
}
