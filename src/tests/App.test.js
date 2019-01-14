import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import NavBar from '../components/NavBar';
import { Route } from 'react-router-dom';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a navigation bar', () => {
  expect(wrapped.find(NavBar).length).toEqual(1);
});

it('has two routes', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Route).length).toEqual(2);
});
