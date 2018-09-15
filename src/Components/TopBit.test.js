import React from 'react';
import ReactDOM from 'react-dom';
import TopBit from './TopBit';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import {expect} from 'chai'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopBit />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('When the component is rendered with rotate = false', () =>{
  it('then the image does not rotate', () => {
    const wrapper = shallow(<TopBit rotate={false} />)
    // console.log('logging 1 ...', wrapper.find('img').props())
    expect(wrapper.find('img').props().className).to.equal('App-logo-dont-rotate')
  })
})

describe('When the component is rendered with rotate = true', () =>{
  it('then the image does rotate', () =>{
    const wrapper = shallow(<TopBit rotate={true} />)
    expect(wrapper.find('img').props().className).to.equal('App-logo')
  })
})

