import React from 'react';
import { connect } from 'react-redux';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  return props.photos && props.photos.length ? (
    <div className="container bg-light">
      <div className="photo-list">
        {props.photos.map(photo => (
          <PhotoListItem
            id={photo.id}
            title={photo.title}
            url={photo.url}
            thumbnailUrl={photo.thumbnailUrl}
          />
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
