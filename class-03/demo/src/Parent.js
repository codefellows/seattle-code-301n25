import React from 'react'
import mom from './assets/mom.jpg'
import Child from './Child'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 100,
      billysMoney: 0
    }
  }

  askForMoney = (amountOfMoney) => {
    if (this.state.money <= 0) {
      this.props.showOverdraft();
    } else {
      this.setState({
        money: this.state.money - amountOfMoney,
        billysMoney: this.state.billysMoney + amountOfMoney
      })
    }
  }

  render() {
    return (
      <>
      <CardGroup>
        <Card>
          <Card.Title>Parent</Card.Title>
          <Card.Img src={mom} alt="I am Billy's mom" /> 
          <Card.Text>I am the Parent and I have {this.state.money} dollars.</Card.Text>
        </Card>
        <Child billysMoney={this.state.billysMoney} askForMoney={this.askForMoney}/>
      </CardGroup>
      </>
    )
  }
}

export default Parent;
