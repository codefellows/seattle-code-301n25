# Lecture Notes: Class 02

- Changes made in Canvas today
  - Labs will now be published an hour before the start of the class in which we are lecturing/demoing that lab.
    - EXAMPLE: lab 03 will be available on Saturday at 8am(PST).
    - EXAMPLE: lab 04 will be available on Tuesday at 5:30pm(PST).
  - Reading assignment due times have been updated to reflect their actual due time.
    - EXAMPLE: reading 03 is due on Saturday, at the start of class time: 9:00am(PST).
    - EXAMPLE: reading 04 is due on Tuesday, at the start of class time: 6:30pm(PST).
  - Retros are due the same day they are assigned, no later than 11:59pm(PST).
    - REMEMBER! There are NO late submissions for Retros!

- Code Review
  - Props is an object, special to React, that allows us to pass data down from parent components via a custom attribute on the child component.
  - The child component can access that data using `this.props.attributeName` syntax.
  - Let's talk about how to render an image in React.
    - Photos can be imported into React components, from your `src` folder, just like any other resource.
    - You can also use an image's source URL and assign it to the `src` attribute on your img element.
    - Both ways are valid, but most jobs will have a style guide to follow that will determine which method they prefer.

- Code Challenge Shred Talk: `array.map()`
  - `array.map()` demo in Repl.it
    - https://replit.com/@HexxKing1/301n25-Code-Challenge-map#index.js
  - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
  - Similar to `array.forEach()`, the `array.map()` method iterates over an array and runs a callback for each element.
  - The difference is that `.map()` will always return you a new array of the same length as the original array, comprised of the return values from each function call.
    - The original array is never mutated.
    - You always get back a new array.
    - Remember, `.forEach` does NOT give us back an array. It returns `undefined` and that is why we have to push the results of each function call into a new, local array.
