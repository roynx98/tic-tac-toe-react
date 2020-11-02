import React from 'react';
import { shallow } from 'enzyme';
import { Board } from '../../components/Board';

describe('Board component', () => {

  test('should match snapshot', async () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should display X at first turn', () => {
    const wrapper = shallow(<Board />);

    wrapper.find('.board-row').at(0).childAt(0).simulate('click');
    expect(wrapper.find('.board-row').at(0).childAt(0).prop('value')).toBe('X');
  });
  
  test('should display O at second turn', () => {
    const wrapper = shallow(<Board />);

    wrapper.find('.board-row').at(0).childAt(0).simulate('click');
    wrapper.find('.board-row').at(0).childAt(1).simulate('click');
    expect(wrapper.find('.board-row').at(0).childAt(1).prop('value')).toBe('O');
  });

});