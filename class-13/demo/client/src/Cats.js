import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import UpdateCatForm from './UpdateCatForm';

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catToBeUpdated: null
    }
  }
  
  selectCatToBeUpdated = (catToBeUpdated) => {
    // shorthand: if the property name and the variable name match, you can write it like this
    this.setState({ catToBeUpdated });
  }

  handleClose = () => {
    this.setState({ catToBeUpdated: null })
  }

  render() {
    return (
      <>
        <ListGroup>
          {this.props.cats.map(cat => (
            <ListGroup.Item key={cat._id} >
              <Cat cat={cat} handleDeleteCat={this.props.handleDeleteCat} selectCatToBeUpdated={this.selectCatToBeUpdated} />
            </ListGroup.Item>
          ))}
        </ListGroup>
        
        {this.state.catToBeUpdated && 
        <UpdateCatForm handleUpdateCat={this.props.handleUpdateCat} cat={this.state.catToBeUpdated} handleClose={this.handleClose} />
        }
      </>
    )
  }
}

class Cat extends React.Component {

  delete = () => {
    this.props.handleDeleteCat(this.props.cat._id)
  }

  update = () => {
    this.props.selectCatToBeUpdated(this.props.cat)
  }

  render() {
    return (
      <>
        <h2>{this.props.cat.name}</h2>
        <p>This cat is {this.props.cat.color} colored. They live in {this.props.cat.location}.</p>
        <Button onClick={this.delete} >Delete this Cat!</Button>
        <Button onClick={this.update}>Update this Cat!</Button>
      </>
    )
  }
}

export default Cats;
