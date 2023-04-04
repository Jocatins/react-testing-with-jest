# React Testing Library with Jest framework

# React Testing Library

React Testing Library is a JavaScript testing utility that allows you to test React components
in a way that closely simulates how they will be used by the end-users
The library was developed by Kent C Dodds and is built on top of Jest testing framework.

# Jest

Jest is a JavaScript test runner that provides resources for writing and running tests.
It is a popular open-source testing framework for JS applications

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
