import React from 'react';
import { connect } from 'react-redux';

const PhotoList = (props) => {
  return props.photos && props.photos.length ? (
    <div className="container bg-light">
      <div className="photo-list">
        {props.photos.map(photo => (
          <div className="photo-list-item">
            <img src={photo.thumbnailUrl} alt={photo.id} className="image"/>
            <div className="overlay">
              <div className="title">{photo.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ):
    <div className="container">
      <div className="spinner-border text-success loading" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
};

const mapStateToProps = state => ({
  photos: state.photos
});

export default connect(mapStateToProps)(PhotoList);
