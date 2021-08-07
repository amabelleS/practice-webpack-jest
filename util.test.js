const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Amabelle', 42);
    expect(text).toBe('Amabelle (42 years old)');
});

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Amabelle', 42);
  expect(text).toBe('Amabelle (42 years old)')
});

