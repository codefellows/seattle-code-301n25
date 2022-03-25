# Class 08 Lecture Notes

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
