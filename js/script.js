import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';


// Load Stores Here

import APILoad from './app.js';


// Load Components Here

import Layout from './components/Layout.js';
import Navbar from './components/Navbar.js';


class AppBody extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <Navbar />
        <APILoad />
      </div>
    );
  }
}


ReactDOM.render(<AppBody />, document.getElementById('app'));
// ReactDOM.render(<Input />,document.getElementById('input'));
