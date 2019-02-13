import React from 'react';
import '../setupTest';
import EditForm from '../components/editForm';
import { shallow } from 'enzyme';

describe('<EditForm />', () => {
  it('renders without crashing', () => {
    shallow(<EditForm />);
  });
});
