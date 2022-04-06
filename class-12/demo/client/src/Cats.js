import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

class Cats extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.cats.map(cat => (
          <ListGroup.Item key={cat._id} >
            <Cat cat={cat} handleDeleteCat={this.props.handleDeleteCat} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}

class Cat extends React.Component {

  delete = () => {
    this.props.handleDeleteCat(this.props.cat._id)
  }

  render() {
    return (
      <>
        <h2>{this.props.cat.name}</h2>
        <p>This cat is {this.props.cat.color} colored. They live in {this.props.cat.location}.</p>
        <Button onClick={this.delete} >Delete this Cat!</Button>
      </>
    )
  }
}

export default Cats;
