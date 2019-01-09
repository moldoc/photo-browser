import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotosRequest } from '../redux/actions';
import PhotoList from '../components/PhotoList';

const URL = 'https://jsonplaceholder.typicode.com/';

class PhotoListView extends Component {
  constructor(props) {
    super(props);

    this.props.fetchPhotosRequest({request_url : `${URL}photos?_page=1&_limit=24`});
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
