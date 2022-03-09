# Class 04 Lecture Notes

- `array.sort()`
  - [Repl.it Demo](https://replit.com/@HexxKing1/301n25-Code-Challenge-sort#index.js)
  - The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
  - UTF-16 (16-bit Unicode Transformation Format) is a character encoding capable of encoding all 1,112,064 valid character code points of Unicode (this number of code points is dictated by the design of UTF-16).
    - <https://stackoverflow.com/questions/2241348/what-is-unicode-utf-8-utf-16>
  - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort>
  - <https://www.w3schools.com/jsref/jsref_sort.asp>
  - <https://www.youtube.com/watch?v=Iv3vgjM8Pv4>
  - Input:
    - A function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
      - The first param in the arrow function is the first item to be compared
      - The second param in the arrow function is the second item to be compared
  - Compare Function Pseudocode

  ```javascript
  function compare(a, b) {
  if (a is less than b by some ordering criterion) {
  return -1; //descending
  }
  if (a is greater than b by the ordering criterion) {
  return 1; //ascending
  }
  // a must be equal to b
  return 0;
  }
  ```

  - OUTPUT:
    - The sorted array. Note that the array is sorted in place, and no copy is made.
  - KEY POINTS:
    - `array.sort(compareFunction)` sorts an array in place -- mutating the array.
    - The compareFunction is a function that is used by sort to evaluate sibling values in turn, and sort in the appropriate order.
      - If compareFunction(a, b) is less than 0, sort a to an index lower than b, i.e. a comes first.
      - If compareFunction(a, b) is greater than 0, sort b to an index lower than a, i.e. b comes first.
      - If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
  - Caveats and Notes
    - The speed and technique of the sort functionality internally is determined by JavaScript, so you can't depend on a consistent "complexity" or "time"
    - compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.

- Forms in React
  - it is the best way to get information from a user (the usual way)
  - authentication (userName and password)
  - a way to interact with a user to collect data
  - we can still use `form` or we can use third-party library component, like bootstrap

- Event Listeners in React
  - onClick
    - when someone clicks on an element/component do something
  - onSubmit
    - when someone submits a form, remember this is just like a form in js
    - `event.preventDefault()`
  - onChange
    - fires the handler any time a change is made to an input field
  - Pros vs Cons
    - onSubmit useful for lots of information
      - captures the values from the entire form and waits for the user to tell the app it is ready to submit data before capture
    - onChange captures state for every additonal character in the input
      - onChange is a little more 'reacty' when the value is being updated by the user we can make that our state and then use the value on input element to reflect the current state
