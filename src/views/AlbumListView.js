import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsersAndAlbums } from '../redux/actions';
import AlbumList from '../components/AlbumList';

class AlbumListView extends Component {
  constructor(props) {
    super(props);

    this.props.fetchUsersAndAlbums();
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
  fetchUsersAndAlbums
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumListView);
