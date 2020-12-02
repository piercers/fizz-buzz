const log = (index: number, message: string) =>
    console.log(`[fB] ${index}: ${message}`);

const isMultipleOfX = (x: number, value: number) => value % x === 0;

const fizzBuzz = (index = 1) => {
    const fizz = isMultipleOfX(3, index) ? 'Fizz' : '';
    const buzz = isMultipleOfX(5, index) ? 'Buzz' : '';
    const message = `${fizz}${buzz}`;
    if (message) {
        log(index, message);
    }
    if (index < 100) {
        fizzBuzz(index + 1);
    }
};

fizzBuzz();
