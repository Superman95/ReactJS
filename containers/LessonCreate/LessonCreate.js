import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { SubmitLessonForm } from 'components';
import { connect } from 'react-redux';
import { createLesson } from 'redux/actions/lessons';
import { stateToHTML } from 'draft-js-export-html';

@connect(({form}) => {
  return ({
    error: form.lessonForm.error
  });
}, {createLesson})
class LessonCreate extends Component {
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
    this.setState({inBrowser: true}); // eslint-disable-line
  }

  /* eslint-disable */
  handleSubmit = (viewModel) => {
    viewModel.order = +viewModel.order;
    viewModel.courseId = "571f155dcbb4e27caad85352";
    const lesson = {...viewModel};

    lesson.description = stateToHTML(lesson.description);
    return this.props.createLesson(lesson);
  };

  render() {
    return (
      <div>
        <Helmet title="Create Lesson"/>
        <ol className="breadcrumb m-b-0">
          <li><a href="/">Home</a></li>
          <li className="active">Course</li>
          <li className="active">Create Lesson</li>
        </ol>
        <SubmitLessonForm formTitle="Create Lesson" onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default LessonCreate;
