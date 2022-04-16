import axios from "axios";
import React from "react";
import "./App.css";
import Snacks from './Snacks';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const SERVER = 'http://localhost:3001';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snacks: []
    }
  }

  componentDidMount() {
    console.log('Component Did Mount!');
    this.getSnacks();
  }

  async getSnacks() {
    try {
      console.log('getting snacks!');
      const url = `${SERVER}/snacks`;
      const response = await axios.get(url);
      await this.setState({snacks: response.data});
    } catch(error) {
      console.error(error);
    }
  }

  async createSnack(snackInfo) {
    try {
      console.log('creating a snack!')
      const url = `${SERVER}/snacks`;
      await axios.post(url, snackInfo);
      this.getSnacks();
    } catch(error) {
      console.error(error);
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.snackName.value);
    const snackInfo = {
      name: event.target.snackName.value,
      description: event.target.snackDescription.value
    }
    console.log(snackInfo);
    this.createSnack(snackInfo);
  }

  async deleteSnack(id) {
    try {
      console.log('Deleting a snack!');
      const url = `${SERVER}/snacks/${id}`;
      await axios.delete(url);
      // this.getSnacks();
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Container className="App">
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Create a Snack</Form.Label>
          <Form.Group controlId="snackName">
            <Form.Control type="text" placeholder="snack name"  />
          </Form.Group>
          <Form.Group controlId="snackDescription">
            <Form.Control type="text" placeholder="snack description" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>

        <Snacks snacks={this.state.snacks} handleDelete={this.deleteSnack} getSnacks={this.getSnacks} />

      </Container>
    );
  }
}

export default App;
