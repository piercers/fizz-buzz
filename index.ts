const log = (index: number, message: string) =>
    console.log(`[fB] ${index}: ${message}`);

const isMultipleOfX = (x: number, value: number) => value % x === 0;

const fizzBuzz = (index = 1) => {
    const multiple3 = isMultipleOfX(3, index);
    const multiple5 = isMultipleOfX(5, index);
    if (multiple3 && multiple5) {
        log(index, 'FizzBuzz');
    } else if (multiple3) {
        log(index, 'Fizz');
    } else if (multiple5) {
        log(index, 'Buzz');
    }
    if (index < 100) {
        fizzBuzz(index + 1);
    }
};

fizzBuzz();
