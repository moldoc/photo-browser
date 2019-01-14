import React from 'react';
import { mount } from 'enzyme';
import PhotoListItem from '../components/PhotoListItem';
import { Modal } from 'react-bootstrap';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <PhotoListItem
      url="https://via.placeholder.com/600/92c952"
      thumbnailUrl="https://via.placeholder.com/150/92c952"
      title="accusamus beatae ad facilis cum similique qui sunt"
      id={1}
      albumId={1}
    />);
});

it('has a button and a modal window', () => {
  wrapped.find('button').simulate('click');
  expect(wrapped.find(Modal).length).toEqual(1);
});

it('has an url and a thumbnail url', () => {
  expect(wrapped.prop('url')).toEqual('https://via.placeholder.com/600/92c952');
  expect(wrapped.prop('thumbnailUrl')).toEqual('https://via.placeholder.com/150/92c952');
});
