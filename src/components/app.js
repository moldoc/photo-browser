import React, { Component } from 'react';
import PhotoListView from '../views/PhotoListView';
import NavBar from './NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <PhotoListView />
      </div>
    );
  }
}
