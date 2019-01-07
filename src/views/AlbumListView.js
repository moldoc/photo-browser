import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAlbumsRequest } from '../redux/actions';
import AlbumList from '../components/AlbumList';

class AlbumListView extends Component {
  constructor(props) {
    super(props);

    this.props.fetchAlbumsRequest();
  }

  render() {
    return (
      <AlbumList />
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = {
  fetchAlbumsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumListView);
