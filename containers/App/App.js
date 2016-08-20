import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
import classNames from 'classnames';
import {toggle as toggleSidebar} from 'redux/actions/sidebar';
import * as auth from 'redux/actions/auth';
import {connect} from 'react-redux';
import {SideBar, UserNav} from 'components';
import {Link} from 'react-router';

@asyncConnect([{
  promise: ({store: {}}) => {
    const promises = [];
    return Promise.all(promises);
  }
}])

@connect(({sidebar})=>({
  isVisible: sidebar.get('isVisible')
}), { onToggleSidebar: toggleSidebar, ...auth })

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    isVisible: PropTypes.bool,
    user: PropTypes.object,
    onToggleSidebar: PropTypes.func,
    logout: PropTypes.func
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
    user: PropTypes.object
  };
  render() {
    const { isVisible, onToggleSidebar, children, logout } = this.props;
    const { user} = this.context;

    const sidebarClasses = classNames('sidebar sidebar-left sidebar-light si-si-3 ls-top-navbar-xs-up sidebar-transparent-md sidebar-transition', {
      'sidebar-visible-md-up sidebar-visible': isVisible
    });

    const layoutContainerClasses = classNames('layout-container ls-top-navbar', {
      'si-l3-md-up': isVisible
    });
    return (
      <div className={layoutContainerClasses}>
        <Helmet {...config.app.head}/>
        <nav className="navbar navbar-dark bg-primary navbar-full navbar-fixed-top">
          <button className="navbar-toggler pull-xs-left" type="button" onClick={() => onToggleSidebar()}>
            <span className="material-icons">menu</span>
          </button>
          <Link to="/" className="navbar-brand"><i className="material-icons">school</i> Knexpert</Link>
          <UserNav logout={logout} user={user} loggedIn={!!user}/>
        </nav>
        <div className={sidebarClasses} id="sidebarLeft" data-scrollable="">
          <SideBar logout={logout} user={user} loggedIn={!!user}/>
        </div>
        <div className="layout-content" data-scrollable>
          <div className="container-fluid">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
