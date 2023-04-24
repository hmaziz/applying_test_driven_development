const myFunctions = require('./example.js');

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing difference -- success', () => {
    const target = 3;
    const result = myFunctions.div(30, 10);
    expect(target).toBe(result);
  });


test('Testing difference -- success', () => {
    const target = 3;
    const result = myFunctions.containsNumbers(30, 10);
    expect(target).toBe(result);
  });