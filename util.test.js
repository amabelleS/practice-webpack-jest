const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('Amabelle', 42);
    expect(text).toBe('Amabelle (42 years old)');
});