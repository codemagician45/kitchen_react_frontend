/* eslint-disable padded-blocks */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import dataMenu from 'dan-api/ui/adminMenu';
import Dashboard from '../Templates/DashboardUsers';

import {
  Chat,
  AdminDashBoardPage,
  AdminOffersPage,
  AdminUserList,
  AdminCompaniesList,
  BlankPage,
  NotFound,
  UserNewOfferPage,
  AdminInstallation
} from '../pageListAsync';

class Admin extends React.Component {

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.redirect(user.type);
    } else {
      this.redirect('login');
    }
  }

  redirect(type) {
    if (type === 'admin') {
      if(this.props.match.path !== '/admin')
      {
        this.props.history.push('/admin');
      }

    } else if (type === 'company') {
      this.props.history.push('/companies');

    } else if (type === 'client') {
      this.props.history.push('/users');
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
          <Route exact path="/admin" component={AdminDashBoardPage} />
          <Route path="/admin/offers" component={AdminOffersPage} />
          <Route path="/admin/messages" component={Chat} />
          <Route path="/admin/users" component={AdminUserList} />
          <Route path="/admin/companies" component={AdminCompaniesList} />
          <Route path="/admin/newOffer" component={UserNewOfferPage} />
          <Route path="/admin/settings" component={AdminInstallation} />
          {/* Default */}
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Admin.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Admin;
