import React, { Component } from 'react';

import { createStore } from 'redux';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

const defaultState = {
    welcome: 'Hi',
    otherState: 'some stuff',
    otherStates: 'some other stuff'
};

// create a new function (reducer) that will be made into a store with redux
// (state = default state...) if state is passed into greeting use that initial value
const greeting = (state = defaultState, action) => {
    switch(action.type){
        case 'GREET_ME':
            return { ...state, welcome: 'Hello Paige' };
        case 'GREET_WORLD':
            return { ...state, welcome: 'Hello world'};
        default:
            return state;
    }
};

/* ^ what's returned from a reducer completely replaces the entire object,
it doesn't modify it ('some other stuff is gone')
to get around it you can use es6 destructuring (...xyz) will prevent that from happening
the reducer takes the new version of the state and merges it with the previous version
 */

// createStore looks for a function to be passed to it, to create a store out of the function
const store = createStore(greeting);

console.log(store.getState());

// the action (simply an object) is 'dispatched' to create the new state in redux
store.dispatch({
    type: 'GREET_ME'
});

console.log(store.getState());
