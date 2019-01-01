import React from 'react';
import { connect } from 'react-redux';

const PhotoList = (props) => {
  return props.photos && props.photos.length ? (
    <div>
      {props.photos.map(photo => (
        <div>
          <img src={photo.thumbnailUrl} alt={photo.id}/>
          <div>
            <div>{photo.title}</div>
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
