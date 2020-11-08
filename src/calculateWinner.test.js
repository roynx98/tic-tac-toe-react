import { calculateWinner } from './helpers/calculateWinner';

describe('calculateWinner function', () => {

  test('should return a winner for the three vertical lines', () => {
    const firstLine = [
      'O', null, null,
      'O', null, null,
      'O', null, null
    ];
    expect(calculateWinner(firstLine)).toBe('O');

    const secondLine = [
      null, 'O', null,
      null, 'O', null,
      null, 'O', null
    ];
    expect(calculateWinner(secondLine)).toBe('O');

    const thirdLine = [
      null, null, 'O',
      null, null, 'O',
      null, null, 'O'
    ];
    expect(calculateWinner(thirdLine)).toBe('O');
  });

  test('should return a winner for the three horizontal lines', () => {
    const firstLine = [
      'O', 'O', 'O',
      null, null, null,
      null, null, null
    ];
    expect(calculateWinner(firstLine)).toBe('O');

    const secondLine = [
      null, null, null,
      'O', 'O', 'O',
      null, null, null
    ];
    expect(calculateWinner(secondLine)).toBe('O');

    const thirdLine = [
      null, null, null,
      null, null, null,
      'O', 'O', 'O',
    ];
    expect(calculateWinner(thirdLine)).toBe('O');
  });

  test('should return a winner for the two diagonal lines', () => {
    const firstLine = [
      'O', null, null,
      null, 'O', null,
      null, null, 'O'
    ];
    expect(calculateWinner(firstLine)).toBe('O');

    const secondLine = [
      null, null, 'O',
      null, 'O', null,
      'O', null, null
    ];
    expect(calculateWinner(secondLine)).toBe('O');
  });

  test('should not return a winner for the three vertical lines', () => {
    const firstLine = [
      'O', null, null,
      'X', null, null,
      'O', null, null
    ];
    expect(calculateWinner(firstLine)).toBe(null);

    const secondLine = [
      null, 'O', null,
      null, 'O', null,
      null, 'X', null
    ];
    expect(calculateWinner(secondLine)).toBe(null);

    const thirdLine = [
      null, null, 'X',
      null, null, 'O',
      null, null, 'O'
    ];
    expect(calculateWinner(thirdLine)).toBe(null);
  });

  test('should not return a winner for the three horizontal lines', () => {
    const firstLine = [
      'X', 'O', 'O',
      null, null, null,
      null, null, null
    ];
    expect(calculateWinner(firstLine)).toBe(null);

    const secondLine = [
      null, null, null,
      'O', 'X', 'O',
      null, null, null
    ];
    expect(calculateWinner(secondLine)).toBe(null);

    const thirdLine = [
      null, null, null,
      null, null, null,
      'O', 'O', 'X',
    ];
    expect(calculateWinner(thirdLine)).toBe(null);
  });

  test('should not return a winner for the two diagonal lines', () => {
    const firstLine = [
      'O', null, null,
      null, 'X', null,
      null, null, 'O'
    ];
    expect(calculateWinner(firstLine)).toBe(null);

    const secondLine = [
      null, null, 'X',
      null, 'O', null,
      'O', null, null
    ];
    expect(calculateWinner(secondLine)).toBe(null);
  });


});
