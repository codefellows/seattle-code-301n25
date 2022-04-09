import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UpdateCatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
      _id: this.props.cat?._id,
      name: this.props.cat?.name,
      color: this.props.cat?.color,
      location: this.props.cat?.location,
      hasClaws: this.props.cat?.hasClaws
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleUpdateCat(this.state);
    this.props.handleClose();
  }

  handleNameChange = event => this.setState({ name: event.target.value });
  handleColorChange = event => this.setState({ color: event.target.value });
  handleLocationChange = event => this.setState({ location: event.target.value });
  handleHasClawsChange = event => this.setState({ hasClaws: event.target.checked });

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Cat Name" value={this.state.name} onChange={this.handleNameChange} />
        </Form.Group>
        <Form.Group controlId="formColor">
          <Form.Label>Color</Form.Label>
          <Form.Control type="name" placeholder="Cat Color" value={this.state.color} onChange={this.handleColorChange}/>
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="name" placeholder="Location" value={this.state.location} onChange={this.handleLocationChange} />
        </Form.Group>
        <Form.Group controlId="formHasClaws">
          <Form.Check type="checkbox" label="Has Claws" checked={this.state.hasClaws} onChange={this.handleHasClawsChange} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default UpdateCatForm;
