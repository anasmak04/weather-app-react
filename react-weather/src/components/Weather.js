import React, { useState } from "react";
import "./Weather.css";
export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  const FormEvent = async (e) => {
    e.preventDefault();
    const api = `https://api.weatherapi.com/v1/timezone.json?key=bd0715d13e1d4b1c830173812220401&q=${query}`;

    try {
      const response = await fetch(api);
      const data = await response.json();
      setWeather(data.location);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const inputChange = (e) => setQuery(e.target.value);

  return (
    <div className="container">
      <h1>search for a weather</h1>
      <form onSubmit={FormEvent}>
        <label className="label">Weather Search City</label>
        <input
          type="text"
          placeholder="please enter your country/city"
          onChange={inputChange}
        ></input>
        <button>search</button>
      </form>

      <div className="h1">
        <h1>Name : {weather.name}</h1>
        <h1>Region : {weather.region}</h1>
        <h1>country : {weather.country}</h1>
        <h1>localtime : {weather.localtime}</h1>
        <h1>lon : {weather.lon}</h1>
        <h1>tz_id : {weather.tz_id}</h1>
      </div>
    </div>
  );
}
