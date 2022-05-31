const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test.skip('can add two large positive numbers', () => { 
    expected = 10000
    actual = sum(3000, 7000);
    expect(actual).toBe(expected);
    
  });

  test.skip('can add two negative numbers', () => {
    expected = -9;
    actual = sum(-4, -5);
    expect(actual).toBe(expected);
  });

  test.skip('can add zero', () => {
    expected = 8;
    actual = sum(8, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
