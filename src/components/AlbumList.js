import React from 'react';
import { connect } from 'react-redux';
import AlbumListItem from './AlbumListItem';
import { ListGroup } from 'react-bootstrap';

const AlbumList = (props) => {
  return props.albums && props.albums.length ? (
      <div className="container bg-light">
        <div className="photo-list">
          <ListGroup>
          {props.albums.map(album => (
            <AlbumListItem
              id={album.id}
              title={album.title}
              userId={album.userId}
            />
          ))}
          </ListGroup>
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
  albums: state.albums
});

export default connect(mapStateToProps)(AlbumList);
