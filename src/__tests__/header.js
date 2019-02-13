import React from 'react';
import '../setupTest';
import { Header } from '../components/header';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('should dispatch logout action on button click', () => {
    const callback = jest.fn();
    const wrapper = mount(
      <Router>
        <Header loggedIn={true} dispatch={callback} />
      </Router>
    );
    wrapper.find('.logout').simulate('click');

    expect(callback).toHaveBeenCalled();
  });

  it('should not show logout button when logged out', () => {
    const wrapper = mount(
      <Router>
        <Header loggedIn={true} />
      </Router>
    );

    const logoutButton = wrapper.find('.logout').text();
    console.log(logoutButton);

    expect(logoutButton).toEqual('Log Out');
  });
});
