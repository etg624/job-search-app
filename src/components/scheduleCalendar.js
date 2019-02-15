import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/job-actions/getJobs';
import './styles/calendar.css';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = Calendar.momentLocalizer(moment);

class ScheduleCalendar extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs(this.props.jobs));
  }

  render() {
    console.log(this.props);
    const events = this.props.jobs.reduce((arr, job) => {
      const eventsArr = job.events.map(event => {
        return {
          start: moment(event.start).add(24, 'hours'),
          end: moment(event.end).add(24, 'hours'),
          title: event.title
        };
      });
      arr = [...eventsArr, ...arr];
      return arr;
    }, []);
    return (
      <div className="App">
        <Calendar
          className="calendar"
          ref="calendar"
          localizer={localizer}
          defaultDate={new Date()}
          popup={true}
          views={['month', 'agenda']}
          defaultView="month"
          events={events}
          style={{
            height: '100vh',
            padding: '30px',
            width: '100%',
            margin: '0 auto'
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { jobs: state.jobs.jobs };
};

export default connect(mapStateToProps)(ScheduleCalendar);
