import React from 'react';
import { mount, shallow } from 'enzyme';
import { Board } from '../../components/Board';

describe('Board component', () => {

  test('Click an empty cell should display X', () => {
    const wrapper = shallow(<Board />);
    // console.log(t.html())

    wrapper.find('.board-row').at(0).childAt(0).simulate('click');
    expect(wrapper.find('.board-row').at(0).childAt(0).prop('value')).toBe('X');
  });

});