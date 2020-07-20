/* eslint-disable padded-blocks */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import dataMenu from 'dan-api/ui/userMenu';
import Dashboard from '../Templates/DashboardUsers';

import {
  Chat,
  UserDashboardPage,
  UserOffersPage,
  BlankPage,
  NotFound,
  UserNewOfferPage,
  UserOffersDetails,
  UsersProfile,
  UserOffersReactions
} from '../pageListAsync';

class Users extends React.Component {

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.redirect(user.type);
    }
  }

  redirect(type) {
    if (type === 'admin') {
      this.props.history.push('/admin');

    } else if (type === 'company') {
      this.props.history.push('/companies');

    } else if (type === 'client') {

      if (this.props.match.path !== '/users') {
        this.props.history.push('/users');
      }

    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode} dataMenu={dataMenu}>
        <Switch>
          {/* Home */}
          <Route exact path="/users" component={UserDashboardPage} />
          <Route path="/users/reactions/:id"   component={UserOffersReactions} />
          <Route exact path="/users/offers"   component={UserOffersPage} />
          <Route path="/users/offers/:id" component={UserOffersDetails} />
          <Route path="/users/messages" component={Chat} />
          <Route path="/users/newOffer" component={UserNewOfferPage} />
          <Route path="/users/profiler" component={UsersProfile} />                    
          <Route path="/app/pages/blank-page" component={BlankPage} />

          {/* Default */}
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Users.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Users;
