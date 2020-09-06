import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: 'Earng'
  };


  userNameChangedHandler(events) {
    this.setState({
      userName: events.target.value
    });
  }


  render() {
    return (
      <div className="App">
        <UserInput userName={this.state.userName} changed={this.userNameChangedHandler.bind(this)} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
