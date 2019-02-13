import React from 'react';
import '../setupTest';
import JobCard from '../components/jobCard';
import { shallow } from 'enzyme';

describe('<JobCard />', () => {
  it('renders without crashing', () => {
    shallow(<JobCard />);
  });
});
