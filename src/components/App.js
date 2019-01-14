import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PhotoListView from '../views/PhotoListView';
import NavBar from './NavBar';
import AlbumListView from '../views/AlbumListView';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg-light">
          <NavBar/>
          <Route exact path="/photos" component={PhotoListView} />
          <Route exact path="/albums" component={AlbumListView} />
        </div>
      </BrowserRouter>
    );
  }
}
