import React, { Component } from 'react';
import store from './../store.js'
import { Provider } from 'react-redux';
import Category from './Category';

class App extends Component {
  constructor(props) { 
    super(props);
  }
  render() {
    return (
      <div>
        <Provider store={store}>
        <Category />
        </Provider>
      </div>
    );
  }
}

export default App;
