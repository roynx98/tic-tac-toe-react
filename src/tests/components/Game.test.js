import React from 'react';
import { shallow } from 'enzyme';
import { Game } from '../../components/Game';

describe('Game component', () => {

  test('should match snapshot', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toMatchSnapshot();
  });

});