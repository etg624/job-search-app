import React from 'react';
import '../../setupTest';
import LandingPage from '../../components/landing-page';
import { shallow } from 'enzyme';

describe('<LandingPage />', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />);
  });
});
