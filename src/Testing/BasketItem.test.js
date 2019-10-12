import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import BasketItem from '../components/ToolsBasket/BasketItem'

describe(`BasketItem component`, () => {
  const tool = {
    tool_img_filename: 'drill.jpg',
    id: '1',
    tool_img_alt: 'drill',
    tool_name: 'drill',
    return_date: null,
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BasketItem tool={tool} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a BasketItem by default', () => {
    const wrapper = shallow(<BasketItem tool={tool} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})