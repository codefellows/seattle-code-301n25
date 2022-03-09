console.log('connected to html!');

// 2. Write the JavaScript to implement this feature: When the user clicks the submit button, we `console.log('submitted')`.
document.getElementById('myForm')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submitted');
  });


// 3. Write the JavaScript to implement this feature: Every time the user types a character into the `name` text box, we update the `h2` to display `Welcome, <username>!`.

const nameEl = document.getElementById('name');
const nameHeaderEl = document.getElementById('nameHeader');
nameEl.addEventListener('input', event => {
  nameHeaderEl.innerText = `Welcome, ${event.target.value}!!!`;
  console.log('event.target.value: ', event.target.value);
});
