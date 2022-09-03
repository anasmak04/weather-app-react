import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <>
    <div className="container">
      
      <h1>search for a weather</h1>
      <form onSubmit={FormEvent}>
      <div class="input-group mb-3">
          <input
            onChange={inputChange}
            type="text"
            class="form-control"
            placeholder="Enter city/country"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
          </div>
      </form>

     
      </div>

       <div className="infos">
       <h4>Name : {weather.name}</h4>
        <pre>Region : {weather.region}</pre>
        <pre>country : {weather.country}</pre>
        <pre>localtime : {weather.localtime}</pre>
        <pre>lon : {weather.lon}</pre>
        <pre>tz_id : {weather.tz_id}</pre>
       </div>

      </>
   
  );
}
