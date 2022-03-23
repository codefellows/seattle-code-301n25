import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Photos from './Photos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      photosArr: []
    }
  }

  captureSearchQuery = (event) => {
    event.preventDefault();
    this.setState({searchQuery: event.target.value}); 
  }

  handleSubmit = async (event) => {
    event.preventDefault(); 
    try {
      const url = `${process.env.REACT_APP_SERVER}/photos?searchQuery=${this.state.searchQuery}`;
      const response = await axios.get(url);
      this.setState({photosArr: response.data});
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    console.log('this.state: ', this.state);
    return (
      <div className="App">
        <h1>Photo Finder App!</h1>
        <Form onSubmit={this.handleSubmit} >
          <Form.Group>
            <Form.Label>Gimme a search term of photos you want to see!</Form.Label>
            <Form.Control onChange={this.captureSearchQuery} type='text' placeholder="Enter a search term" />
          </Form.Group>
        </Form>

        <Photos photosArr={this.state.photosArr} />
      </div>
    );
  }
}

export default App;
