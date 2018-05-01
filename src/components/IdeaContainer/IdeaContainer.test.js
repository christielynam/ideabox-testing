import React from 'react';
import ReactDOM from 'react-dom';
import IdeaContainer from '../IdeaContainer/IdeaContainer';
import { shallow, mount, render } from 'enzyme';

describe('IdeaContainer', () => {
  let wrapper;

  beforeEach(() => {
    const removeIdeaMock = jest.fn()
    wrapper = shallow(<IdeaContainer ideas={[]} removeIdea={removeIdeaMock} />)
  })
  
  it('matches the sanpshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})