import React from "react";
import Child from './Child'

class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      childName: "Billy",
      anotherPropName: "you will need to seperate them by commas"
    }
  }

  render() {
    return (
      <div className="Parent">
        <Child name={this.state.childName} />
      </div>
    );
  }
}

export default Parent;
