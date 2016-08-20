import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {SubmitCourseForm} from 'components';
import { connect } from 'react-redux';
import { createCourse } from 'redux/actions/courses';
import { stateToHTML } from 'draft-js-export-html';

@connect(({form}) => {
  return ({
    error: form.courseForm.error
  });
}, { createCourse })
class CourseCreate extends Component {
  static propTypes = {
    children: PropTypes.object,
    createCourse: PropTypes.func,
    error: PropTypes.string
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = {
    inBrowser: false
  };

  componentDidMount() {
    this.setState({ inBrowser: true }); // eslint-disable-line
  }

  handleSubmit = (viewModel) => {
    viewModel.duration = +viewModel.duration;
    viewModel.authorId = this.context.store.getState().auth.toJS().user.name;
    viewModel.category = viewModel.category || 'HTML';
    const course = {...viewModel};
    course.description = stateToHTML(course.description);
    return this.props.createCourse(course);
  };

  render() {
    return (
      <div>
        <Helmet title="Create Course"/>
        <ol className="breadcrumb m-b-0">
          <li><a href="/">Home</a></li>
          <li className="active">Courses</li>
        </ol>
        <SubmitCourseForm formTitle="Create Course" onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default CourseCreate;
