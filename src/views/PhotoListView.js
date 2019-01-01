import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotosRequest } from '../redux/actions';
import PhotoList from '../components/PhotoList';

class PhotoListView extends Component {
  constructor(props) {
    super(props);

    this.props.fetchPhotosRequest();
  }

  render() {
    return (
      <PhotoList />
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = {
  fetchPhotosRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListView);
