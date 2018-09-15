import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import {expect} from 'chai'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('When the App component is rendered ...', () =>{
  const wrapper = shallow(<App/>);
  it('it has the correct structure', () =>{
    // console.log('logging 1 ...', wrapper.find('div#d1').find('div#d2'))
    expect(wrapper.find('div#d1')).to.have.lengthOf(1)
    expect(wrapper.find('div#d1').find('div#d2')).to.have.lengthOf(1)
    expect(wrapper.find('div#d1').find('TopBit')).to.have.lengthOf(1)
    expect(wrapper.find('div#d2').find('ControlPanel')).to.have.lengthOf(1)
  })

  it('the Top Bit rotate flag is set to false', () => {
    expect(wrapper.find('TopBit').props().rotate).to.equal(false)
  })
  
  it('the control panel rotate flag prop is set to false', () => {
    expect(wrapper.find('ControlPanel').props().rotate).to.equal(false)
  })
  
  it('the correct function reference is passed down to the control panel', () => {
    // console.log('logging 1 ....', wrapper.instance())
    expect(wrapper.find('ControlPanel').props().updateRotate).to.equal(wrapper.instance().updateRotate)
  })
  
})

describe('When the updateRotate function is called on the App component ...', () => {
  it('the top bit rotate flag is negated', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('TopBit').props().rotate).to.equal(false)
    wrapper.instance().updateRotate();
    // expect(wrapper.state().rotate).to.equal(true) // BAD!!! shouldnt test implementation!
    // expect(wrapper.state().uselessFlag).to.equal(false) // BAD!!! shouldnt test implementation!
    expect(wrapper.find('TopBit').props().rotate).to.equal(true)
    wrapper.instance().updateRotate();
    expect(wrapper.find('TopBit').props().rotate).to.equal(false)
  })

  it('the control panel rotate flag is negated', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('ControlPanel').props().rotate).to.equal(false)
    wrapper.instance().updateRotate();
    expect(wrapper.find('ControlPanel').props().rotate).to.equal(true)
    wrapper.instance().updateRotate();
    expect(wrapper.find('ControlPanel').props().rotate).to.equal(false)
  })

})
