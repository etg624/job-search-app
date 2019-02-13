import React from 'react';
import '../setupTest';
import ScheduleCalendar from '../components/scheduleCalendar';
import { shallow } from 'enzyme';

describe('<ScheduleCalendar />', () => {
  it('renders without crashing', () => {
    shallow(<ScheduleCalendar />);
  });
});
