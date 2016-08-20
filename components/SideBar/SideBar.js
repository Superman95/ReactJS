import React from 'react';
import {Link} from 'react-router';

const SideBar = ({loggedIn = false, logout, user}) => {
  return (
    <div>
      <div className="sidebar-heading">Student</div>
      {
        loggedIn
          ? (<ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <Link className="sidebar-menu-button" to="/my-profile">
              <i className="sidebar-menu-icon material-icons">account_box</i> {user.get('name')}
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link className="sidebar-menu-button" to="/account/basic-info">
              <i className="sidebar-menu-icon material-icons">account_box</i> Edit Account
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <Link className="sidebar-menu-button" to="/my-courses">
              <i className="sidebar-menu-icon material-icons">school</i> My Courses
            </Link>
          </li>
          <li className="sidebar-menu-item">
            <a className="sidebar-menu-button" href="javascript:void(0)" onClick={()=>logout()}>
              <i className="sidebar-menu-icon material-icons">lock_open</i> Logout
            </a>
          </li>
        </ul>)
          :
          (
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <Link className="sidebar-menu-button" to="/signup">
                  <i className="sidebar-menu-icon material-icons">account_box</i> Signup
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link className="sidebar-menu-button" to="/login">
                  <i className="sidebar-menu-icon material-icons">subdirectory_arrow_right
                  </i> Login
                </Link>
              </li>
            </ul>
          )
      }
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
