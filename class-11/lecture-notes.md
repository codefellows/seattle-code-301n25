# Class 11 Lecture Notes

- Chaining Methods
  - Repl.it Demo: <https://replit.com/@HexxKing1/301n25-Code-Challenges-Chaining-Methods#index.js>

- CRUD
  - the four basic operations (create, read, update, and delete) of data storage

- MongoDB
  - MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

- Mongoose
  - Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework.

- ORM aka Object-Relational Mapping
  - <https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a>
  - it is a technique that maps data from a database to "incompatible type systems" using object-oriented programming languages

- GET
  - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

## Hosted Mongo Databases: Atlas

While you can run Mongo on your own machines, it's quite common to run an instance of Mongo in the cloud so that you can take advantage of better hardware, more memory and higher speed networks. Mongo offers a hosted cloud database service called "Atlas" ... once you've got this setup, it's easy to connect your API servers from anywhere in the world to use it.

<https://www.mongodb.com/cloud/atlas/register2>

1. Sign Up
1. Setup the organization
   - Name your organization and project
   - These can be whatever you want to call them
   - Set Preferred Language (Javascript)
1. Pick the "Free" (Shared Cluster) option
1. Create Cluster
   - Choose AWS
   - Choose the closest region to your location (i.e. Oregon)
1. Create a DB User
   - Click the "Database Access" link
   - Add a new user
     - Choose Password Authentication
     - Choose a username and password
     - For access rights, choose "Atlas Admin"
1. Enable Network Access
   - Click Network Access Button
   - Click "Add IP Address"
   - Choose the "Allow Access from Anywhere" option
   - Click "Confirm"
1. Get your connection string
   - Click "Clusters" button on the left
   - Click on the "Connect" button on the cluster screen
   - To connect to your new database with the command line:
     - Choose the "Connect with Mongo Shell" option
     - Copy out the connection string
     - This will look something like this:
     - `mongo "mongodb+srv://cluster0.xtrut.mongodb.net/<dbname>" --username dba`
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
   - To connect your Node or Express application:
     - Choose the "Connect your Application" option
     - This will look something like this:
     - `mongodb+srv://dba:<password>@cluster0.xtrut.mongodb.net/<dbname>?retryWrites=true&w=majority`
     - Replace `<password>` with the password you created earlier
     - Replace `<dbname>` with the name of the database you want to use for your application, for example 'people'
     - Use this as  `MONGODB_URI` in your .env file or at Heroku when you deploy
