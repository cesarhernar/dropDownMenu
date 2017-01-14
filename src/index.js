import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { Provider } from 'redux';
import { connect } from 'react-redux';
import store from './store.js';

const Default = App.default;

render(<App />, document.getElementById('app'));
