import React, { Component } from 'react';
import './App.css';
import JobCard from './components/card';
import Header from './components/header';
import GetJobs from './components/getJobs';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <JobCard />
        <GetJobs />
      </div>
    );
  }
}

export default App;
