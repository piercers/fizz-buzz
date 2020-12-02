const isMultipleOf = (multiple: number, value: number) =>
    value % multiple === 0;

interface MessagePartFn {
    (value: number): string;
}

const config: [number, string][] = [
    [3, 'Fizz'],
    [5, 'Buzz'],
];

const parts: MessagePartFn[] = config.map(
    ([multiple, message]) => (value) =>
        isMultipleOf(multiple, value) ? message : '',
);

const messageForValue = (value: number) =>
    parts.reduce((message, part) => `${message}${part(value)}`, '');

const fizzBuzz = (value = 1, limit = 100) => {
    const message = messageForValue(value);
    if (message) {
        console.log(`[fB] ${value}: ${message}`);
    }
    if (value < limit) {
        fizzBuzz(value + 1);
    }
};

fizzBuzz();
