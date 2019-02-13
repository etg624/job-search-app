import React from 'react';
import '../setupTest';
import AddEventForm from '../components/addEventForm';
import { shallow } from 'enzyme';

describe('<AddEventForm />', () => {
  it('renders without crashing', () => {
    shallow(<AddEventForm />);
  });
});
