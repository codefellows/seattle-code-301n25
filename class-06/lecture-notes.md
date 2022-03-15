# Class 10 Lecture Notes

- Value vs Reference
  - Demo: <https://replit.com/@HexxKing1/301n25-Code-Challenge-Value-vs-Reference#index.js>
  - Docs and helpful resources:
    - <https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293>
    - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures>
    - <https://www.w3schools.com/js/js_object_definition.asp>
    - <https://developer.mozilla.org/en-US/docs/Glossary/Primitive>

  - Pass by Reference
    - the location reference is transferred to the new variable; efficient; one-step process
    - assigning one variable to another would give us 2 different ways to access or change the same value
    - is similar to creating an ALIAS to the original. When your Mom calls you “Pumpkin Pie” although your name is Margaret, this doesn’t suddenly give birth to a clone of yourself: you are still one, but you can be called by these two very different names.
  - Pass by Value
    - a new value is added to memory, and indicated by the new variable, more flexible
    - every time we assign a variable to another variable, we have a new copy, that can be independently modified.
    - The price we pay for this flexibility is all the additional memory required to store all those copies.
    - Picture it like twins: they are born exactly the same, but the first twin doesn’t change when the second twin changes.
  - How does JavaScript decide which method to use? Assign a new reference? Or make a new copy?
    - It decides based on what kind of value is being assigned.
      - If the value is large, complicated, or could change its memory footprint, it's assigned by reference, so no copy has to be made. The new variable points to the same place in memory as the source variable.
      - If the value is unchangeable (immutable), fixed size, and easy to store, it's assigned by copy. The new variable points to a new spot in memory, that contains a fresh copy of the source value. We call this "assigned by value".
  - Primitive types: booleans, numbers, strings, and a few others...
  - Objects: Arrays, functions, and of course object literals, and a few others ...
  - Primitive types are always passed by value, and Object types are always passed by reference.
