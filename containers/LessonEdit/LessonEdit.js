import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { SubmitLessonForm } from 'components';
import { connect } from 'react-redux';
import { editLesson } from 'redux/actions/lessons';
import { load } from 'redux/actions/lessons';
import { stateToHTML } from 'draft-js-export-html';

@connect(({form}) => {
  return ({
    error: form.lessonForm.error
  });
}, {editLesson, load})
class LessonEdit extends Component {
  static propTypes = {
    children: PropTypes.object,
    error: PropTypes.string,
    load: PropTypes.func.isRequired,
    editLesson: PropTypes.func.isRequired,
    routeParams: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = {
    inBrowser: false
  };

  componentDidMount() {
    const { lessonId } = this.props.routeParams;
    this.props.load(lessonId);
    this.setState({inBrowser: true}); // eslint-disable-line
  }

  handleSubmit = (viewModel) => {
    const { lessonId } = this.props.routeParams;
    viewModel.order = +viewModel.order;
    viewModel.lessonId = lessonId;
    const lesson = {...viewModel};
    lesson.description = stateToHTML(lesson.description);
    return this.props.editLesson(lesson);
  };

  render() {
    return (
      <div>
        <Helmet title="Edit Lesson"/>
        <ol className="breadcrumb m-b-0">
          <li><a href="/">Home</a></li>
          <li className="active">Lessons</li>
          <li className="active">Edit Lesson</li>
        </ol>
        <SubmitLessonForm formTitle="Edit Lesson" onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default LessonEdit;
