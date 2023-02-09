# React Testing Library with Jest framework

Types of test
`Unit Test` -> Individual blocks of an app, eg classes, functions
`Integration Test` -> Combination of units
`End to End Test` -> Application flow test

# Test Driven Development (TDD)

is a software development process where you write tests before writing the software code
`Step 1` -> Create tests that verify the functionality of a specific feature
`Step 2` -> Write software code that will run the tests successfully when re-executed
`Step 3` -> Refactor the code for optimization while ensuring the tests continue to pass

# Assertions

`Common Matchers`

test('two plus two is four', () => {
expect(2 + 2).toBe(4);
});

test('object assignment', () => {
const data = {one: 1};
data['two'] = 2;
expect(data).toEqual({one: 1, two: 2});
});

`Truthiness`

-   toBeNull matches only null
-   toBeUndefined matches only undefined
-   toBeDefined is the opposite of toBeUndefined
-   toBeTruthy matches anything that an if statement treats as true
-   toBeFalsy matches anything that an if statement treats as false

e.g
test('null', () => {
const n = null;
expect(n).toBeNull();
expect(n).toBeDefined();
expect(n).not.toBeUndefined();
expect(n).not.toBeTruthy();
expect(n).toBeFalsy();
});

test('zero', () => {
const z = 0;
expect(z).not.toBeNull();
expect(z).toBeDefined();
expect(z).not.toBeUndefined();
expect(z).not.toBeTruthy();
expect(z).toBeFalsy();
});

`Numbers`
test('two plus two', () => {
const value = 2 + 2;
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3.5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(4.5);

// toBe and toEqual are equivalent for numbers
expect(value).toBe(4);
expect(value).toEqual(4);
});

-   For floating point equality, use toBeCloseTo

test('adding floating point numbers', () => {
const value = 0.1 + 0.2;
//expect(value).toBe(0.3); This won't work because of rounding error
expect(value).toBeCloseTo(0.3); // This works.
});

`String`
You can check strings against regular expressions with toMatch:

test('there is no I in team', () => {
expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
expect('Christoph').toMatch(/stop/);
});

`Arrays and iterables`
You can check if an array or iterable contains a particular item using toContain:

const shoppingList = [
'diapers',
'kleenex',
'trash bags',
'paper towels',
'milk',
];

test('the shopping list has milk on it', () => {
expect(shoppingList).toContain('milk');
expect(new Set(shoppingList)).toContain('milk');
});
