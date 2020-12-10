import { fizzBuzz } from '.';

describe('FizzBuzz', () => {
  beforeEach(() => {
    spyOn(console, 'log');
  });

  it(`runs through 1 - 100`, () => {
    fizzBuzz();
    expect(console.log).toHaveBeenCalledTimes(100);
  });

  it(`logs the number by default`, () => {
    fizzBuzz(1, 1);
    expect(console.log).toHaveBeenCalledWith(1);
  });

  it(`logs "Fizz" for multiples of 3`, () => {
    fizzBuzz(3, 3);
    expect(console.log).toHaveBeenCalledWith("Fizz");
  });

  it(`logs "Buzz" for multiples of 5`, () => {
    fizzBuzz(5, 5);
    expect(console.log).toHaveBeenCalledWith("Buzz");
  });

  it(`logs "FizzBuzz" for multiples of both 3 and 5`, () => {
    fizzBuzz(15, 15);
    expect(console.log).toHaveBeenCalledWith("FizzBuzz");
  });
});
