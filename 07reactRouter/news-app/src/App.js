import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { Component } from 'react';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <>

        <Navbar />

        <News />

      </>
    )
  }
}
