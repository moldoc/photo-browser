import React from 'react';
import { connect } from 'react-redux';

const PhotoList = (props) => {
  return props.photos && props.photos.length ? (
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
  ): <div>Loading...</div>;
};

const mapStateToProps = state => ({
  photos: state.photos
});

export default connect(mapStateToProps)(PhotoList);
