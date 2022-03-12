import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Map from "./Map";
import Restaurants from "./Restaurants";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayResults: false
    }
  }

  handleLocationSearch = (event) => {
    event.preventDefault();
    console.log(event.target.city.value);
    this.setState({displayResults: true})
  };

  render() {
    return (
      <Container className="header">
        <Form onSubmit={this.handleLocationSearch}>
          <Form.Group controlId="city">
            <Form.Label>Search for a City</Form.Label>
            <Form.Control type="text" placeholder="Omelas" size="sm" />
            <Button type="submit">Explore!</Button>
          </Form.Group>
        </Form>
        {/* condition ? true : false */}
        {/* {this.state.displayResults ? 
          <>
            <Map />
            <Restaurants />
          </>
          :
          ""
        } */}

        {this.state.displayResults && 
          <>
            <Map />
            <Restaurants />
          </>
        }
      </Container>
    );
  }
}

export default Main;
