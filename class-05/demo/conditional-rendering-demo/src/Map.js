import React from 'react';
import Image from 'react-bootstrap/Image'
import map from './images/map.png'

class Map extends React.Component {
  render() {
      return (
      <div className="header">
        <h3>Map of...</h3>
        <Image src={map} alt="this is an image of the city we searched for" />
      </div>
    );
  }
}

export default Map;