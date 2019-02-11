import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = Calendar.momentLocalizer(moment);

class ScheduleCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(5, 'days')),
        title: 'Some title'
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          selectable={true}
          defaultView="month"
          events={this.state.events}
          style={{ height: '60vh', padding: '20px' }}
        />
      </div>
    );
  }
}

export default ScheduleCalendar;
