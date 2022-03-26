# Class 08 Lecture Notes

- Refactoring
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n25-Refactoring#index.js>
  - Refactoring is the process of restructuring code, while not changing its original functionality. The goal of refactoring is to improve internal structure by making small changes without altering the code's behavior.

- Functional Programming
  - Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.
    - Resource: <https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0>

- Modularization/Componentization
  - When you're building an application, as the code becomes more and more complex you cannot put your entire code in one single file. As this becomes unmanageable, you can use Node's module pattern to write different files and export them (including functions, objects, and methods) to the main file.
    - Resource: <https://www.freecodecamp.org/news/modular-programming-nodejs-npm-modules>

- What is a Promise?
  - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    - Callbacks added with `.then()` will never be invoked before the completion of the current run of the JavaScript event loop.
    - These callbacks will be invoked even if they were added after the success or failure of the asynchronous operation that the promise represents.
    - Multiple callbacks may be added by calling `.then()` several times. They will be invoked one after another, in the order in which they were inserted.
    - One of the great things about using promises is chaining.

- Object Iteration
- repl.it demo: <https://replit.com/@HexxKing1/301n25-Code-Challenge-Object-Iteration#index.js>
  - OBJECT.KEYS: takes in an object as an argument and returns an array of keys (properties)
    - DOCS:
      - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys>
    - SYNTAX: `Object.keys(obj)`
    - INPUT: The object of which the enumerable's own properties are to be returned.
    - OUTPUT: An array of strings that represent all the enumerable properties of the given object.

  - OBJECT.VALUES - Returns an iterable array of just the values from the object
    - DOCS:
      - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values>
    - SYNTAX: `Object.values(obj)`
    - INPUT: The object whose enumerable own property values are to be returned
    - OUTPUT: An array containing the given object's own enumerable property values.

  - OBJECT.ENTRIES - Returns an array of each "Entry" as an an array with a key and value
    - DOCS:
      - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries>
    - SYNTAX: `Object.entries(obj)`
    - INPUT: The object whose own enumerable `[key, value]` pairs are to be returned.
    - OUTPUT: An array of the given object's own enumerable `[key, value]` pairs
