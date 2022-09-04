import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import data from './countries.json';
import NavBar from "./components/NavBar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/countryDetails"


function App() {

  const [countries, setCountries] = useState(data);

  return (  
  <div className="App">
    <NavBar />


    <Routes>
      <Route exact path="/" element={<CountriesList countries={countries}/>}/>
      <Route exact path="/:countryId" element={<CountryDetails countries={countries}/>}/>

    </Routes>

    
  </div>
  );
}

export default App;