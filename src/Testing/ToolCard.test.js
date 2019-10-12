import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ToolCard from '../components/ToolCard/ToolCard'

describe(`ToolCard component`, () => {
  const tool = {
    tool_img_filename: 'drill.jpg',
    id: '1',
    tool_img_alt: 'drill',
    tool_name: 'drill',
    return_date: null,
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter> <ToolCard {...tool} /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a ToolCard by default', () => {
    const wrapper = shallow(<ToolCard {...tool} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})