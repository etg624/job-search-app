import React, { Component } from 'react';
import './App.css';
import JobCard from './components/card';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <JobCard />
      </div>
    );
  }
}

export default App;
