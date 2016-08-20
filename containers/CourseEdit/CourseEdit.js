import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {SubmitCourseForm} from 'components';
import { connect } from 'react-redux';
import { editCourse } from 'redux/actions/courses';
import { load as loadCourse} from 'redux/actions/courses';
import { stateToHTML } from 'draft-js-export-html';

@connect(({form}) => {
  return ({
    error: form.courseForm.error
  });
}, { editCourse, loadCourse })
class CourseEdit extends Component {
  static propTypes = {
    children: PropTypes.object,
    error: PropTypes.string,
    loadCourse: PropTypes.func.isRequired,
    editCourse: PropTypes.func.isRequired,
    routeParams: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = {
    inBrowser: false
  };

  componentDidMount() {
    this.props.loadCourse(this.props.routeParams.slug);
    this.setState({ inBrowser: true }); // eslint-disable-line
  }

  handleSubmit = (viewModel) => {
    viewModel.Slug = this.props.routeParams.slug;
    viewModel.duration = +viewModel.duration;
    viewModel.authorId = this.context.store.getState().auth.toJS().user.name;
    viewModel.category = viewModel.category || 'HTML';
    const course = {...viewModel};
    course.description = stateToHTML(course.description);
    return this.props.editCourse(course);
  };

  render() {
    return (
      <div>
        <Helmet title="Edit Course"/>
        <ol className="breadcrumb m-b-0">
          <li><a href="/">Home</a></li>
          <li className="active">Courses</li>
        </ol>
        <SubmitCourseForm formTitle="Edit Course" onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default CourseEdit;
