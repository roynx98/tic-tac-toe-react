import React from 'react';
import { shallow } from 'enzyme';
import { Board } from '../../components/Board';
import sinon from 'sinon';

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

  test('should display status "Next player: X" as default', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('.status').text()).toBe('Next player: X');
  });

  test('should not modify the board after clicking more than once a cell', () => {
    const setStateSpy = sinon.spy(Board.prototype, 'setState');
    const wrapper = shallow(<Board />);
    wrapper.find('.board-row').at(0).childAt(0).simulate('click');
    wrapper.find('.board-row').at(0).childAt(0).simulate('click');
    expect(setStateSpy.calledTwice).toBe(false);
    Board.prototype.setState.restore();
  });

});