# Class 10 Lecture Notes

- Nested Arrays / Nested For Loops
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n25-Code-Challenge-Two-Dimensional-Arrays#index.js>

- In Memory Database
  - In-memory databases are purpose-built databases that rely primarily on memory for data storage, in contrast to databases that store data on disk or SSDs. In-memory data stores are designed to enable minimal response times by eliminating the need to access disks.
    - Resource: <https://medium.com/@denisanikin/what-an-in-memory-database-is-and-how-it-persists-data-efficiently-f43868cff4c1>
- Cache
  - it is simply an object that lives in a module in our server code.
  - We are goingt to store new API data in the cache object to look up later when the same query is requested.
- Cache Hit
  - the data requested is in the cache
- Cache Miss
  - the data requested is NOT in the cache
- `Date.now()` <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now>

- Debugging
  - The easiest and maybe the most common way its to simply `console.log()` the variables you want to check
  - You can use `typeof` to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types.
  - Setting breakpoints in the debugger window will allow you to examine values
    - [VS Code Debugger tool](https://code.visualstudio.com/docs/editor/debugging)
    - The `debugger;` keyword stops the execution of JavaScript, and calls (if available) the debugging function. This has the same function as setting a breakpoint in the debugger. If no debugging is available, the debugger statement has no effect.
  - eslint
  - catch missing brackets or parens with the VS Code Rainbow Brackets extension.
  - React extension in Chrome: <https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en>
  - Live Share VS Code Extension for collab <https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack>

- debugging steps to take when you get a bug
  - <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging>
  - `console.log` your variables
  - use `typeof` to check the data type of a variable
  - check for misspelled variable/function names
  - look for mismatched brackets/parens
  - mixed use of single and double quotes
  - look for function calls that are passing in arguments in the wrong order
  - double check array indexing when trying to grab a specific value
  - use caution when reinitializing variables inside a loop
  - Prevent Infinite Loops with a Valid Terminal Condition

last line in `sever.js` to catch any endpoint that is not defined in the server.

```js
app.use('*', notFoundHandler);

function notFoundHandler(request, response) {
  response.status(404).send('huh?');
}
```
