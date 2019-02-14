import React from 'react';
import '../../setupTest';
import JobList from '../../components/jobList';
import { shallow } from 'enzyme';

describe('<JobList />', () => {
  it('renders without crashing', () => {
    shallow(<JobList />);
  });
});
