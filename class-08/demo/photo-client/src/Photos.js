import React from 'react';

class Photos extends React.Component {
  render() {
    return (
        this.props.photosArr.map((photo, idx) => (
          <div key={idx} >
            <img src={photo.img_url} alt={photo.photographer} />
            <p>Photographer: {photo.photographer}</p>
          </div>
        ))
    )
  }
}

export default Photos;
