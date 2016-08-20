import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

export default class AccountLayout extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="container-fluid">
        <Helmet title="Sign up"/>
        <div className="card">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="/account/basic-info">Account</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account/change-password" data-toggle="tab">Change password</Link>
            </li>
          </ul>
          {children}
        </div>
      </div>
    );
  }
}
