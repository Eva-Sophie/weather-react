import React from "react";
import './App.css';
import SearchForm from "./SearchForm"
import City from "./City"
import Weather from "./Weather"
import Icon from "./Icon"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
<div className="App">
<div className="container">
<div className="weather-app-page">
<div className="weather-app">
<SearchForm />
<div class="row">
<City />
<Weather />
<Icon />

</div>
</div>
</div>
<Footer />
</div>
</div>
</div>

  );
}

export default App;
