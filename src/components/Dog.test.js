import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Dog Component test', () => {
  it('Renders a dog', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
