import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoListItem from './PhotoListItem';
import { fetchPhotosRequest } from '../redux/actions';
import InfiniteScroll from 'react-infinite-scroller';

class PhotoList extends Component {

  onScroll = () => {
    this.props.fetchPhotosRequest({ request_url: this.props.pagination.next.url });
  };

  render() {
    return (this.props.photos && this.props.photos.length ? (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.onScroll}
        hasMore={this.props.pagination.next !== undefined}
        loader={
          <div className="spinner-container">
            <div className="spinner-border text-success" role="status" key={0}>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        <div className="container bg-light">
          <div className="photo-list">
            {this.props.photos.map(photo => (
              <PhotoListItem
                id={photo.id}
                title={photo.title}
                url={photo.url}
                thumbnailUrl={photo.thumbnailUrl}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    ) :
      <div className="container">
        <div className="spinner-border text-success loading" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>);
  }
}

const mapStateToProps = state => ({
  photos: state.photos,
  pagination: state.pagination
});

const mapDispatchToProps = {
  fetchPhotosRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
