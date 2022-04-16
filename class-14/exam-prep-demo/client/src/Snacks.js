import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Snacks extends React.Component {
  render() {
    return (
      <>
      {this.props.snacks.map(snack => (
          <Card key={snack._id} style={{ width:'18rem' }}>
            <Snack data={snack} delete={this.props.handleDelete} getSnacks={this.props.getSnacks} />
          </Card>
        ))}
      </>
    )
  }
}

class Snack extends React.Component {

  deleteSnack = (id) => {
    this.props.delete(id);
    this.props.getSnacks();
  }

  render() {
    const data = this.props.data;
    return (
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Button onClick={() => this.deleteSnack(data._id)}>Eat this snack!</Button>
      </Card.Body>
    )
  }
}

export default Snacks;
