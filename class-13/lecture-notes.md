# Class 13 Lecture Notes

- String Manipulation Shred Talk
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n25-Code-Challenge-String-Manipulation#index.js>

- Feedback Overview
  - "Like how we're doing code review. Wish people would ask more questions but we have a shy bunch."
  - "Well this is 301 and I get the concept of doing more of the research which will be the standard in the field, but after talking with a few classmates I'm concerned that the general consensus is a feeling of being overwhelmed.  just concerned because a lot of them won't speak up and say how they feel."
  - "Even though this week was a lot of new information I was actually able to use my experience from classes in the past to help me keep up with this week."
  - "The code reviews are amazing because I like to see other ways I can change up my code or just see how other's think of ways to write code. "
  - "The backend is a bit confusing and very new to me"
  - "The career assignments are more of an after thought. I know everybody is focusing on grasping programming concepts right now and finishing the labs but growing your network professionally is extremely important. Without any sort of 'foot in the door', breaking into the tech industry from non traditional background is difficult. Even CS grads have a hard time doing it."
  - "I wish I had more time to work with the same partners, we're swapping quite quickly"
  - Found most helpful: "working in a team and also asking other teams for help. super nice!"
  - "It has been challenging trying to keep up with the new concepts"
  - "The load of work can be overwhelming with the labs"

- Exam Preview
  - Exam will take place on Saturday, April 16th.
  - I will be giving a review lecture on Saturday morning before the exam.
  - Students will be given starter code that will have minor bugs in it. You will need to fix the bugs and then add some features onto the code.
  - There will be tests that you can run so you will know if you have completed the tasks correctly.
  - You will need to deploy both your front-end and back-end.
  - You will have 4 hours to complete the exam.
  - You must be present in Remo, sitting alone at a table while taking the exam.
  - You may use any resource except for other people.
    - If you are stuck on a gituation, ask the instructor for assistance.
    - TAs may not help you complete the exam.
  - There will be an option for one retake if you happen to fail the exam the first try.

- UPDATE
  - If you want to update a resource, what information do you need?
    - `_id`: you will need a way of identifying the resource
      - the _id is going to be sent in the params
    - the property you want to update and it's new value
      - the updated values will be sent body
  - What are the steps needed to make an update happen in the frontend?
    - create an update button that grabs the `_id` of the book that the button belongs to.
    - the update book reveals a form that will allow us to update properties
    - our update form will grab all the properties from the book that was clicked on and auto-fill the input fields for us.
    - our update form will create an object with the `_id` and the new values and pass it to the async function
    - async function to PUT the request.body to the URL
  - What are the steps needed to make an update happen in the backend?
    - grab the `_id` from the `request.params.id`
    - we need some kind of Mongoose method that updates our document in the database
    - we should pass the new updated book data along to the database
    - we want to return the newly updated book

- PATCH vs PUT
  - PATCH is another HTTP method that is used to update a document in MONGO however, it only updates SOME properties but not all the properties.
  - PUT updates the entire document in the database.

- `Model.findByIdAndUpdate(id, update, options)`
  - <https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndUpdate>
  - HINT: Look into the `new` option for your lab #13

- Optional Chaining Operator `?.`
  - Optional chaining is a handy recent feature of JavaScript (introduced in ES2020) that lets you check for nullish values while accessing property values.
  - The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
  - This will become handy when building our UPDATE feature in React.
    - Think about how we can update a nested value within a state property...
    - If we start to update just one value within our Book object, it could cause our app to break due to a "nullish" value.
    - This is where the optional chaining operator comes in! It only cares that the Book object is valid and will allow us to continue to update a nested property inside of our Book object in order to save the new value in State.
