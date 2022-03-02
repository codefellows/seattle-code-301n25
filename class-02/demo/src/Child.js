import React from 'react';
import boy from './assets/boy.jpg'
import Card from 'react-bootstrap/Card'

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patsOnBillysHead: 0
    }
  }

  patsBillysHead = () => {
    this.setState({
      patsOnBillysHead: this.state.patsOnBillysHead + 1
    })
  }

  render() {
    return (
      <Card className="childCard" style={{ width: '18rem' }}>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Img variant="top" src={boy} alt={this.props.name} onClick={this.patsBillysHead} />
        <Card.Body>
          <Card.Text>👋 Pats = {this.state.patsOnBillysHead} 👋</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Child;
