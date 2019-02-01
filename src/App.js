import React, { Component } from 'react';
import './App.css';
import JobCard from './components/card';

class App extends Component {
  render() {
    return (
      <div>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    );
  }
}

export default App;
