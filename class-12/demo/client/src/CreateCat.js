import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateCat extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const newCat = {
      name: event.target.formName.value,
      color: event.target.formColor.value,
      location: event.target.formLocation.value,
      hasClaws: event.target.formHasClaws.checked
    };
    this.props.handleCreateCat(newCat);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter the name of your cat" />
        </Form.Group>
        <Form.Group controlId="formColor">
          <Form.Label>Color</Form.Label>
          <Form.Control type="name" placeholder="Enter your cat's color" />
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="name" placeholder="Enter your cat's location" />
        </Form.Group>
        <Form.Group controlId="formHasClaws">
          <Form.Check type="checkbox" label="Has Claws" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default CreateCat;
