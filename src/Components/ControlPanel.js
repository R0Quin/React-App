import React, { Component } from 'react';
import '../App.css';


class ControlPanel extends Component {

    constructor(props){
        super(props)
        this.state= {
            rotateButtonDisabled : false
        }
    }


    disableRotateButton = (event) => {
        this.setState((currentState) => {
            return {
                rotateButtonDisabled: !currentState.rotateButtonDisabled
            }
        })
    }

    updateRotateFunction = (event) => {
      this.props.updateRotate()
    }

  render() {
    return (
      <div id='d1' className="App">
        <p id='p1' className="App-intro">
          <button id='disable' title="disable or enable" onClick={this.disableRotateButton}>
            {this.state.rotateButtonDisabled ? 'Enable' : 'Disable'}
          </button>
          {'   '}
          <button id='rotate' title="rotate" disabled={this.state.rotateButtonDisabled}
            onClick={this.updateRotateFunction}>
          {this.props.rotate ? 'Stop' : 'Rotate'}
          </button>
        </p>
      </div>
    );
  }
}

export default ControlPanel;
