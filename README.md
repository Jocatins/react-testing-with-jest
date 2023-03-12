# React Testing Library with Jest framework

# React Testing Library

React Testing Library offers a set of testing helpers that structure your tests based on user interactions

# Jest

Jest is a JavaScript test runner that provides resources for writing and running tests.

`The number of renders determines the no of tests`

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

- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as true
- toBeFalsy matches anything that an if statement treats as false

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

- For floating point equality, use toBeCloseTo

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

# Priority Order for Queries

Tests should resemble how users interact with your code (component, page)

1 - getByRole - This is used to query every element that is exposed to the accessibility tree

2 - getByLabelText - really good for form fields

3 - getByPlaceholderText -

4 - getByText - It can be used to find non-interactive elements like div's, spans and paragraphs

5 - getByDisplayValue

6 - getByAltText

7 - getByTitle

8 - getByTestId

# TextMatch - regex

screen.getByText(/World/) // substring match

screen.getByText(/world/i) // substring match ignore case

screen.getByText(/^hello world$/i) // full string match ignore case

# -------- textMatch -- custom Function

screen.getByText((content) => content.startsWith("string"))

# findBy and findAllBy

`findBy`

- returns a promise which resolves when an element is found which matches the given query
- The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms

`findAllBy`

- returns a promise which resolves to an array of elements when any elements are found which match the given query
- The promise is rejected if no elements are found after a default timeout of 1000ms

screen.debug() --> to visualize a formatted state of the DOM tree
logRoles() ---> to print out the list of all implicit of other roles within the DOM tree

# User- Event

It is a companion library for testing library that simulates user interactions by dispatching
the events that would happen if the interaction took place in a browser.
It is the recommended way to test user interactions with RTL

# fireEvent

It is a method from RTL which is used to dispatch DOM events

`userEvent` allows you to describe a user interaction instead of a concrete event

- Updating user event ---> npm i @testing-library/user-event@14.0.0-alpha.14

# Pointer Interactions

`Convenience API`
click(), dblClick() and tripleClick is not a pointer API, it is a convenient API that calls the pointer APIs
hover() and unhover()
Convenience APIs are used when writing tests
tab()

# Pointer APIs

pointer({keys: '[Mouse-Left]'})
it accepts an obj as args and specifies the key property
pointer({keys: '[Mouse-Left][mouse-right]'})
pointer( '[Mouse-Left][mouse-right]')

# Utility API

type()
clear()
selectOptions()
deselectOptions()
upload()

# Clipboard APIs

copy()
cut()
paste()

# Static Analysis Testing

- TypeScript
- EsLint
- Prettier
- Husky
- lint-staged

npm i --save-dev eslint-plugin-jest-dom
npm i prettier --save-dev --exact
npm i eslint-config-prettier

# Husky

npx husky-init and npm install
