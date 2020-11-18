import React from 'react';
import { shallow } from 'enzyme';
import { Game } from '../../components/Game';
import { calculateWinner } from '../../helpers/calculateWinner';
import sinon from 'sinon';

jest.mock('../../helpers/calculateWinner');

describe('Game component', () => {

  beforeEach(() => {
    calculateWinner.mockReturnValue(null);
  });

  test('should match snapshot', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should display status "Next player: O" as default', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find('.game-info').childAt(0).text()).toBe('Next player: O');
  });

  test('should change state to O at first turn', () => {
    const wrapper = shallow(<Game />);
    const componentInstance = wrapper.instance();
    componentInstance.handleClick(0)
    expect(componentInstance.state.history[1].squares[0]).toBe('O');
  });

  test('should change state to X at second turn', () => {
    const wrapper = shallow(<Game />);
    const componentInstance = wrapper.instance();
    componentInstance.handleClick(0);
    componentInstance.handleClick(1);
    expect(componentInstance.state.history[2].squares[1]).toBe('X');
  });

  test('should not modify the board after clicking more than once a cell', () => {
    const setStateSpy = sinon.spy(Game.prototype, 'setState');

    const wrapper = shallow(<Game />);
    const componentInstance = wrapper.instance();

    componentInstance.handleClick(0);
    componentInstance.handleClick(0);
    expect(setStateSpy.calledOnce).toBe(true);
    setStateSpy.restore();
  });

  test('should not modify the board after winning', () => {
    const setStateSpy = sinon.spy(Game.prototype, 'setState');
    calculateWinner.mockReturnValue('X');
    const wrapper = shallow(<Game />);
    const componentInstance = wrapper.instance();

    componentInstance.handleClick(0);
    componentInstance.handleClick(1);
    componentInstance.handleClick(2);

    expect(setStateSpy.called).toBe(false);
    setStateSpy.restore();
  });

  test('should increase histoy after cliking a valid cell', () => {
    const historyInitLength = 1;
    const wrapper = shallow(<Game />);
    const componentInstance = wrapper.instance();

    expect(componentInstance.state.history.length).toBe(historyInitLength);
    componentInstance.handleClick(0);
    expect(componentInstance.state.history.length).toBe(historyInitLength + 1);
  });

});