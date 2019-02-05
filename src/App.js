import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import JobList from './components/jobList';
import { Route } from 'react-router-dom';
import AddJob from './components/addJob';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/home" component={props => <JobList {...props} />} />
        <Route exact path="/add" component={AddJob} />
      </div>
    );
  }
}

export default App;
