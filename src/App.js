import React, { Component } from 'react';
import Header from './Components/Header';
import UserInput from './Components/UserInput';
import Weather from './Components/Weather';
import './App.css';

const API_KEY = 'acac2c20905ab5c6b51e4f00522a3e41';

class App extends Component {
  constructor() {
      super()
      this.state = {
        city: undefined,
        country: undefined,
        description: undefined,
        temp: undefined,
        humidity: undefined,
        error: undefined
      }
  }

  fetchWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const endpoint_call = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city +',' + country + '&appid=' + API_KEY + '&units=metric');
    const data = await endpoint_call.json();
    if(city && country){
      console.log(data)
      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        temp: data.main.temp * 1.8 + 32,
        humidity: data.main.humidity,
        error: ""
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        description: undefined,
        temp: undefined,
        humidity: undefined,
        error: "Please enter a city and state."
      })
    }

  }


  render() {
    return (

      <div className="App">
        <div className="header-container">
          <Header />
        </div>
        <div className="weather-container">
          <UserInput fetchWeather={this.fetchWeather}/>
          <Weather
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          temp={this.state.temp}
          humidity={this.state.humidity}
          error={this.state.error}
          />
        </div>
      </div>
    );
  }
}



export default App;
