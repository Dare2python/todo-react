import React, { Component } from 'react';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      userName: "Adam"
    }
  }

  render() {
    return (
      <div className="App">
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName} To Do list
        </h4>
      </div>
    );
  };


}
