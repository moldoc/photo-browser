import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const AlbumListItem = (props) => {
  return (
    <ListGroupItem header={props.title}>By {props.userId}</ListGroupItem>
    );
};

export default AlbumListItem;
