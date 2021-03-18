import readPath from '../build/main.js';

describe('readPath', () => {

  it('is a function', () => {
    expect(typeof readPath).toBe('function');;
  });

  it('It should return "grass"', () => {

    const result = 'http://google.com/    https://github.com/miluskapajuelo/LIM014-mdlinks    https://www.instagram.com/    dnfkdfnkdnkfndknf'
    const ruta = '../src'

    expect(readPath(ruta)).toBe(result);
  });
});
