import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import {ProfileFull} from 'components';

class MyProfile extends Component {

  static contextTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const {user} = this.context;
    return (
      <div>
        <Helmet title="My Courses"/>
        <ol className="breadcrumb m-b-0">
          <li><Link to="/">Home</Link></li>
          <li className="active">My Profile</li>
        </ol>
        <div>
          <ProfileFull user={user}/>
        </div>
      </div>
    );
  }
}

export default MyProfile;
