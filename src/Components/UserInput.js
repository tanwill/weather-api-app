import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    return (
        <div className="App__user-input">
          <form onSubmit={this.props.fetchWeather}>
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="country" placeholder="Country" />
            <button>Get Weather</button>
          </form>
        </div>
    );
  }
}

export default UserInput;
