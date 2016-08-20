import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { SubmitPageForm } from 'components';
import { connect } from 'react-redux';
import { createPage} from 'redux/actions/pages';
import { stateToHTML } from 'draft-js-export-html';

@connect(({form}) => {
  return ({
    error: form.pageForm.error
  });
}, { createPage })
class PageCreate extends Component {
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

  /* eslint-disable */
  handleSubmit = (viewModel) => {
    viewModel.order = +viewModel.order;
    viewModel.lessonId = "571f9abfcbb4e20de4669c11";
    const page = {...viewModel};

    page.pageContent = stateToHTML(page.pageContent);
    return this.props.createPage(page);
  };

  render() {
    return (
      <div>
        <Helmet title="Create Lesson"/>
        <ol className="breadcrumb m-b-0">
          <li><a href="/">Home</a></li>
          <li className="active">Course</li>
          <li className="active">Lesson</li>
          <li className="active">Create Page</li>
        </ol>
        <SubmitPageForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default PageCreate;

