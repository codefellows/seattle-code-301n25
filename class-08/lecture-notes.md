# Class 08 Lecture Notes

- REST
  - By using APIs in creative ways, you can make really interesting apps, but leave the data management to the experts.
  - REST give us a common language and set of methods to access all of it, with WRRC.
  - API's follow a very similar set of rules -- REST.
    - With HTTP, you can GET, POST, PUT, PATCH, DELETE
    - With Data, you can Create, Read, Update, or Delete
    - With REST
      - You Create using POST
      - You Update using PUT or PATCH
      - You Delete using DELETE
      - You Read using GET
  - REST stands for REpresentational State Transfer.
  - It means when a RESTful API is called, the server will transfer to the client a representation of the state of the requested resource.
  - The representation of the state can be in a JSON format, and probably for most APIs this is indeed the case.
  - In order for your APIs to be RESTful, you have to follow a set of constraints when you write them.
  - The REST set of constraints will make your APIs easier to use and also easier to discover.
  - Resource: <https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f>

- Nodemon aka "No Demon"
  - Runs your server and restarts it for you when you make changes
    - the only exception is if you make a change to your `.env` file!
  - Install it: `npm install --save-dev nodemon`
    - `--save-dev` is just saving nodemon as a developer dependencies and not as a app dependency
    - you can see it in package lock, its under a different object
  - Start your server: `npx nodemon server.js`

- Thunder Client
  - Docs: <https://github.com/rangav/thunder-client-support#usage>
  - Similar to Postman or Insomnia
  - We will use Thunder Client more as we move into using other HTTP methods.
  - Click "New Request" to get started
    - Paste the base URL into GET request bar.
    - Fill in your Query Parameters with your key and params.
    - Hit "Send" and view the response object in the Response Tab.
    - Inspect the "shape" of the data and see if it conforms to your needs.

- What changed from the previous class?
  - We will be refactoring our data fetchers from simply require() on a static `.json` file into pulling data from a live API with axios, and having to wade through a promise to do so.
    - Don't forget about `async` and `await`!
    - Read more about Promises here:
      - <https://www.w3schools.com/js/js_promise.asp>
      - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>
  - We will truly be feeding the city explorer front end live data.
  - This is an ongoing requirement for the week.
  - Not a lot of code movement (really a single change to the fetching functions).
- Extra practice with the Movies API!
  - We are doing the exact same thing with Movies that we accomplished with Weather.
  - You can even model your Movies code from your Weather code.

- Deploy to Heroku
  - Just like Netlify, you will deploy your server code via GitHub.
  - Don't forget to add your enviroment variables to Heroku!
    - You do NOT need to add your PORT variable because Heroku will insert their own server port in order to host your application.
    - Your PORT variable MUST be named `PORT` in your server.js code because that is what Heroku looks for when serving your application.
  - Follow the Trello cards VERY CAREFULLY for a successful deploy!

- Introducing Regular Expressions 101
  - repl.it Demo: <https://replit.com/@HexxKing1/301n25-Code-Challenge-Regex#index.js>
  - What is Regex?
    - Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text.
    - Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.
    - A regular expression can be a single character, or a more complicated pattern.
    - Regex is a means of identifying patterns in strings. When you search for patterns in a string, you can use this search pattern(the Regex pattern) to describe what you are searching for.
    - We commonly use Regex to validate input, replace character patterns with other characters, refer to character patterns in a string or to parse through data collected with web scraping(data science/machine learning).
    - Regex is used in almost all programming languages...JavaScript, Java, VB, C#, C / C++, Golang, Python, Perl, PHP, Ruby, R, and many others!

  - DOCS:
    - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions>
    - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp>
    - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet>
    - <https://www.w3schools.com/jsref/jsref_obj_regexp.asp>
    - <https://www.w3schools.com/js/js_regexp.asp>
    - <https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#regular-expressions>
    - <https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285>
    - <https://medium.com/factory-mind/regex-cookbook-most-wanted-regex-aa721558c3c1>

  - Check out Regex101 to test out your Regex pattern!
    - <https://regex101.com/>
    - NOTE: If you are using regex101 to test your patterns, you MUST change the Flavor (look to the left of the page to find the "Flavor") to ECMAScript(JavaScript) FIRST!!

  - SYNTAX: `/pattern/modifier(s);`
    - VOCABULARY EXPLAINED:
      - The pattern to search for:   bananas
      - A regular expression:   `/bananas/`
      - A globally matched regular expressions:  `/bananas/g`

  - MODIFIERS/FLAGS: used to perform case-insensitive and global searches. A Regex pattern usually comes within this form `/abc/`, where the search pattern is delimited by two slash characters `/`. At the end we can specify a flag with these values (we can also combine them each other):
    - `g`: Perform a global match (find all matches rather than stopping after the first match)
    - `i`: Perform case-insensitive matching
    - `m`: Perform multiline matching - when enabled `^` and `$` will match the start and end of a line, instead of the whole string

  - BRACKETS: used to find a range of characters
    - `[abc]` Find any character between the brackets
    - `[^abc]` Find any character NOT between the brackets
    - `[0-9]` Find any character between the brackets (any digit)
    - `[^0-9]` Find any character NOT between the brackets (any non-digit)

  - CAPTURING GROUPS: a way to treat multiple characters as a single unit. They are created by placing the characters to be grouped inside a set of parentheses.
    - `(dog)` Groups together the characters 'd', 'o', 'g'.
    - `(x|y)` Find any of the alternatives specified

  - METACHARACTERS: are characters with a special meaning
    - `.` Find a single character, except newline or line terminator
    - `\w` Find a word character
    - `\W` Find a non-word character
    - `\d` Find a digit
    - `\D` Find a non-digit character
    - `\s` Find a whitespace character
    - `\S` Find a non-whitespace character
    - `\b` Find a match at the beginning/end of a word,
      - beginning like this: `/\bHello/`
      - end like this: `/Hello\b/`
    - `\B` Find a match, but not at the beginning/end of a word

  - QUANTIFIERS: Indicate numbers of characters or expressions to match.
    - `n*` Matches any string that contains zero or more occurrences of n
    - `^n` Matches any string with n at the beginning of it
    - `n?` Matches any string that contains zero or one occurrences of n
    - `n$` Matches any string with n at the end of it
    - `n+` Matches any string that contains at least one n

  - REGEXP OBJECT METHODS: patterns are used with the `exec()` and `test()` methods of RegExp
    - `test()`
      - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test>
      - The `test()` method executes a search for a match between a regular expression and a specified string.
      - Returns true or false.
      - Syntax: `pattern.test(str)`

  - STRING OBJECT METHODS: `match()`, `matchAll()`, `replace()`, `replaceAll()`, `search()`, and `split()` methods
    - `match()`
      - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match>
      - The `match()` method retrieves the result of matching a string against a regular expression.
      - Returns an Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
        - If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
        - if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.
        - Syntax: `str.match(pattern)`
    - `replace()`
      - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace>
      - The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement.
        - The pattern can be a string or a RegExp.
        - The replacement can be a string or a function to be called for each match.
        - Only the first occurrence will be replaced.
        - The original string is left unchanged.
      - Returns a new string, with some or all matches of a pattern replaced by a replacement.
      - Syntax: `str.replace(pattern, replacer)`
