import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBit from './Components/TopBit'
import ControlPanel from './Components/ControlPanel'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      rotate: false,
      uselessFlag: true
    };
  }


  updateRotate = () => {
    this.setState((prevState) => 
      {
        return {
        rotate: !prevState.rotate
        // uselessFlag: !prevState.uselessFlag
      };
    });
  }


  updateRotate2 = () => {
    this.setState((prevState) => 
      {
        return {
        rotate: !prevState.rotate
      };
    });
  }

  render() {
    return (
      <div id='d1' className="App">
        <TopBit rotate={this.state.rotate} />
        <div id='d2' className="App-intro">
          <ControlPanel updateRotate={this.updateRotate}
            rotate={this.state.rotate} />
        </div>
      </div>
    );
  }
}

export default App;
