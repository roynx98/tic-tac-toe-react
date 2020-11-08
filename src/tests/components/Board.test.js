import React from 'react';
import { shallow } from 'enzyme';
import { Board } from '../../components/Board';
import sinon, { spy } from 'sinon';

describe('Board component', () => {
  const squares = [
    'X', null, 'O',
    null, 'O', null,
    null, null, 'X',
  ];

  test('should match snapshot', () => {
    const wrapper = shallow(<Board squares={squares} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should match squares', () => {
    const wrapper = shallow(<Board squares={squares} />);
    // First row
    expect(wrapper.find('.board-row').at(0).childAt(0).prop('value')).toBe(squares[0]);
    expect(wrapper.find('.board-row').at(0).childAt(1).prop('value')).toBe(squares[1]);
    expect(wrapper.find('.board-row').at(0).childAt(2).prop('value')).toBe(squares[2]);

    // Second row
    expect(wrapper.find('.board-row').at(1).childAt(0).prop('value')).toBe(squares[3]);
    expect(wrapper.find('.board-row').at(1).childAt(1).prop('value')).toBe(squares[4]);
    expect(wrapper.find('.board-row').at(1).childAt(2).prop('value')).toBe(squares[5]);

    // Third row
    expect(wrapper.find('.board-row').at(2).childAt(0).prop('value')).toBe(squares[6]);
    expect(wrapper.find('.board-row').at(2).childAt(1).prop('value')).toBe(squares[7]);
    expect(wrapper.find('.board-row').at(2).childAt(2).prop('value')).toBe(squares[8]);
  });

  test('should call a function on click a cell', () => {
    const onClickSpy = sinon.spy();
    const wrapper = shallow(<Board squares={squares} onClick={onClickSpy}/>);
    wrapper.find('.board-row').at(1).childAt(0).simulate('click');
    expect(onClickSpy.calledOnceWith(3)).toBe(true);
  });

});