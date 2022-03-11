# Class 05 Lecture Notes

- `array.reduce()`
  - Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.
  - The reducer walks through the array element-by-element, at each step adding the current index value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.
  - DOCS:
    - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce>
    - <https://www.w3schools.com/jsref/jsref_reduce.asp>

  - INPUTS:
    - A “reducer” function that takes four arguments:
      - previousValue AKA accumulator (the value resulting from the previous call to callbackfn)
      - currentValue AKA current index value (the value of the current element)
      - currentIndex Optional
      - array (the array to traverse) Optional
    - initialValue Optional
      - A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.
  - OUTPUTS:
    - The value that results from running the “reducer” callback function to completion over the entire array.
  - KEY POINTS:
    - The reduce() method executes a reducer function for each value of an array.
    - reduce() returns a single value which is the function's accumulated result.
    - reduce() does not execute the function for empty array elements.
    - reduce() does not change the original array.
