import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/job-actions/getJobs';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = Calendar.momentLocalizer(moment);

class ScheduleCalendar extends Component {
  componentDidMount() {
    this.props.dispatch(fetchJobs(this.props.jobs));
  }

  render() {
    const events = this.props.jobs.reduce((arr, job) => {
      const eventsArr = job.events.map(event => {
        return {
          start: event.start,
          end: event.end,
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
          localizer={localizer}
          defaultDate={new Date()}
          selectable={true}
          views={['month', 'agenda']}
          defaultView="month"
          events={events}
          style={{
            height: '60vh',
            padding: '40px',
            width: '90%',
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
