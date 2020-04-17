import React, { Component } from 'react';
import Weather from './Weather';

import './App.css';
import Temperature from './Temperature';

/** 
 * This example illustrates a simple react project 
 * that works with an external API. 
 * 
 * Take note of the comments they point common 
 * problems you will need to solve with React. 
 * 
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components 
 * 
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component. 
 * 
 * */

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '94010',     // Used to hold value entered in the input field
      weatherData: null,  // Used to hold data loaded from the weather API
    }
  }

  async getData(url) {
    try {
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch(err) {
      return err
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    const zip = this.state.inputValue
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
    this.getData(url).then(json => {
      this.setState({ weatherData: json });
    }).catch((err) => {
      this.setState({ weatherData: null }) // Clear the weather data we don't have any to display
      console.log('-- Error fetching --')
      console.log(err.message)
    })
  }

  renderWeather() {
    // This method returns undefined or a JSX component
    if (this.state.weatherData === null) {
      // If there is no data return undefined
      return undefined
    }

    return <Weather weatherData={this.state.weatherData} />

  }

  render() {
    return (
      <div className="App">

        {/** This input uses the controlled component pattern */}
        <form onSubmit={e => this.handleSubmit(e)}>

          {/** 
          This pattern is used for input and other form elements 
          Set the value of the input to a value held in component state
          Set the value held in component state when a change occurs at the input 
          */}
          <input 
            value={this.state.inputValue} 
            onChange={e => this.setState({ inputValue: e.target.value })}
            type="text" 
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="enter zip"
          />

          <button type="submit">Submit</button>

        </form>

        {/** Conditionally render this component */}
        {this.renderWeather()}

      </div>
    );
  }
}

export default App;
