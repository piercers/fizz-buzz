const isMultipleOf = (multiple: number, value: number) =>
    value % multiple === 0;

const messageConfig: [number, string][] = [
    [3, 'Fizz'],
    [5, 'Buzz'],
    // [10, 'Jazz'],
];

interface MessagePartFn {
    (value: number): string;
}

const messageParts: MessagePartFn[] = messageConfig.map(
    ([multiple, message]) => (value) =>
        isMultipleOf(multiple, value) ? message : '',
);

const messageForValue = (value: number) =>
    messageParts.reduce((message, part) => `${message}${part(value)}`, '');

const fizzBuzz = (value = 1) => {
    const message = messageForValue(value);
    if (message) {
        console.log(`[fB] ${value}: ${message}`);
    }
    if (value < 100) {
        fizzBuzz(value + 1);
    }
};

fizzBuzz();
