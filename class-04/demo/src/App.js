import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// dont declare variable likes this - bad react
const allNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// import allBeasts from './data.json' ^^^^

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "stranger",
      numerals: allNumerals
    };
  }

  handleName = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted!')
  }

  handleChange = (event) => {
    event.preventDefault();
    const selection = event.target.value;
    let updatedNumerals; 

    // ternanry
    // condition ? return true : return false;

    if (selection === 'odd') {
      updatedNumerals = allNumerals.filter(num => num % 2 === 1);
      this.setState({numerals: updatedNumerals});
    } else if (selection === 'even') {
      updatedNumerals = allNumerals.filter(num => num % 2 === 0);
      this.setState({numerals: updatedNumerals});
    } else {
      this.setState({numerals: allNumerals});
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome, {this.state.name}</h1>
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" onInput={this.handleName} />
          <br />
          <label htmlFor="date">Birth Date</label>
          <input id="date" name="dob" type="date" />
          <br />
          <input type="submit" />
        </form>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" onInput={this.handleName}/>
            <Form.Text className="text-muted">
              Please share with us your name...
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Birthday</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Container>
          <Form>
            <Form.Label>Filter Numerals</Form.Label>
            <Form.Select onChange={this.handleChange} >
              <option value='none' >Unfiltered</option>
              <option value='odd' >Odds</option>
              <option value='even' >Evens</option>
            </Form.Select>
          </Form>
          <h3>The state of my numerals is: {this.state.numerals}</h3>
        </Container>
      </div>
    );
  }
}

export default App;
