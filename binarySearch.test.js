const binarySearch = require("./binarySearch");

describe('binarySearch - return the correct index of value', () => { 
  test("binarySearch([1,2,3,4,5],2) should be 1.", () => {
    expect(binarySearch([1,2,3,4,5],2)).toEqual(1);
  });
  test('binarySearch([1,2,3,4,5],3) should be 2.', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  });
  test('binarySearch([1,2,3,4,5],5) should be 4.', () => {
    expect(binarySearch([1,2,3,4,5],5)).toEqual(4);
  });
  test('binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) should be 2.', () => {
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)).toEqual(2);
  });
  test('binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) should be 16.', () => {
    expect(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)).toEqual(16);
  });
});