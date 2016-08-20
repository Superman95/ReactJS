import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import {CourseCompact} from 'components';

class MyCourses extends Component {
  render() {
    return (
      <div>
        <Helmet title="My Courses"/>
        <ol className="breadcrumb m-b-0">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-profile">My Profile</Link></li>
          <li className="active">My Courses</li>
        </ol>
        <h1 className="page-heading h2">Manage Courses</h1>
        <div className="card-columns">
          <CourseCompact/>
          <CourseCompact/>
          <CourseCompact/>
          <CourseCompact/>
        </div>
      </div>
    );
  }
}

export default MyCourses;
