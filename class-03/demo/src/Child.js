import React from 'react';
import billy from './assets/teen.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Grandson from './grandchild/Grandson'

class Child extends React.Component {

  askFor10Dollars = () => {
    this.props.askForMoney(10);
  }

  render() {
    return (
      <>
        <Card>
          <Card.Title>I am the Billy!</Card.Title>
          <Card.Img src={billy} alt="I am the child, Billy!"/>
          <Card.Text>I have {this.props.billysMoney} dollars.</Card.Text>
          <Button onClick={this.askFor10Dollars}>Ask mom for $10</Button>
          <Button onClick={() => this.props.askForMoney(20)}>Ask mom for $20</Button>
        </Card>
        {/* <Grandson askforMoney={this.props.askForMoney}/>  */}
      </>
    )
  }
}

export default Child;
