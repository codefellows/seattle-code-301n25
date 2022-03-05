# Lecture Notes: Class 03

- Feedback Overview
  - "One of the least helpful aspects of this course would be the readings...just the way I learn faster and more efficient is from watching a video of someone describing code it gives a whole different perspective on it than reading."
  - "This week was a little difficult for me just because of the hectic nature of my life"
  - "While I appreciate covering the bias topic in class, I feel that too much of an emphasis has a negative effect on everyone learning. Yes drawing attention to these types of issues are necessary however I think paying too much attention detracts from the purpose of acknowledging bias."
  - "I do get a little lost when trying to take notes or run through some code."
  - "I will probably not give a 10/10 from now on because I think there is always things to improve"
  - "I hope more people open up this class as it's a bit quieter than last one."
  - "Also that console, iTerm2? I'm gonna have to look into that, looked pretty damn nice."
    - <https://iterm2.com/>

- `array.filter()` Shred Talk
  - [Demo on Repl.it](https://replit.com/@HexxKing1/301n25-Code-Challenge-filter#index.js)
  - Similar to `array.forEach()` and `array.map()`, the `array.filter` method iterates over an array and runs a callback for each element.
  - The callback receives the currentValue and the index of the array element as a parameter.
  - .filter() will always return you a new array, comprised of elements from the original array that match your criteria
    - Think about it this way: which elements in the array match the filter condition?

- passing functions in React
  - Allows us to do something in a child component that will trigger behavior in the parent component.
  - Useful for writing a function in the parent that updates state, and passing it as props to the child. The action of changing state still occurs in the parent, even if the child triggers it and/or passes arguments.
  - This is called "lifting state" in React.
