import React, { useState } from 'react'
import SearchBar from '../Components/SearchBar.jsx';
import Cards from '../Components/Cards.jsx'
import './App.css';

const apiKey = 'secret';

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if (recurso.main !== undefined) {
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather:recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        const exisCity = cities.filter(city => city.id === ciudad.id);
        if (exisCity.length > 0) alert('This city already exist!');
        else setCities(oldCities => [...oldCities, ciudad]);
      }
      else alert("City not found");
    });
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) return ciudad[0];
    else return null
  }

  return (
    <div className='App'>
      <SearchBar onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
