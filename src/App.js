import React, { Component } from 'react';
import './App.css';
import JobCard from './components/jobCard';
import Header from './components/header';
import JobList from './components/jobList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <JobList />
      </div>
    );
  }
}

export default App;
