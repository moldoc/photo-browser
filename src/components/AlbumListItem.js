import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';

const AlbumListItem = (props) => {
  const user = props.users.find(user => user.id === props.userId).name;
  return (
    <ListGroupItem header={props.title}>By {user}</ListGroupItem>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(AlbumListItem);
