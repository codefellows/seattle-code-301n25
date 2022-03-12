import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import restData from './fake-data/restaurants.json';

class Restaurants extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        {restData.map((rest, idx) => (
          <Accordion.Item eventKey={idx}>
            <Accordion.Header>{rest.restaurant}</Accordion.Header>
            <Accordion.Body>Cuisines: {rest.cuisines}</Accordion.Body>
            <Accordion.Body>Location: {rest.locality}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  }
}

export default Restaurants;
