import React from 'react';
import '../../setupTest';
import AddJob from '../../components/addJob';
import { shallow } from 'enzyme';

describe('<AddJob />', () => {
  it('renders without crashing', () => {
    shallow(<AddJob />);
  });
});
