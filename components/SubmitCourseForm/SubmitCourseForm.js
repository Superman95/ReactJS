import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import TextEditor from '../TextEditor/TextEditor';
import { connect } from 'react-redux';
import ReactCloudinaryUploader from '../ReactCloudinaryUploader/ReactCloudinaryUploader';

@connect(({courses})=>({ initialValues: courses.get('course') }))


@reduxForm({
  form: 'courseForm'
})
export default class SubmitCourseForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    error: PropTypes.string,
    formTitle: PropTypes.string.isRequired
  };

  state = {
    inBrowser: false
  };

  componentDidMount() {
    this.setState({ inBrowser: true }); // eslint-disable-line
  }

  errorRender(error) {
    let res = <span/>;
    if (error) {
      res = (<div className="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> {error}
      </div> );
    }
    return res;
  }

  render() {
    const {
      handleSubmit,
      error,
      formTitle
      } = this.props;
    if (this.state.inBrowser) {
      require('../../lib/cwidget.js'); // eslint-disable-line
    }
    return (
      <form onSubmit={handleSubmit}>
        {this.errorRender(error)}
      <div>
        <div className="media">
          <div className="media-body">
            <h1 className="page-heading h2">
              {formTitle}
            </h1>
          </div>
          <div className="media-right media-middle">
            <button type="submit" className="btn btn-success btn-rounded">SAVE</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Basic Information</h4>
              </div>
              <div className="card-block">
                <div>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <Field name="name" component={name =>
                      <div>
                        <input type="text" {...name} className="form-control" placeholder="Write a title"/>
                        {name.touched && name.error && <span className="text-danger">{name.error}</span>}
                      </div>
                    }/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="details">Description</label>
                    <Field name="description" component={description =>
                      <div>
                        {this.state.inBrowser ? <TextEditor {...description}/> : <span className="form-control">Loading Editor</span>}
                      </div>
                    }/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Thumbnail</h4>
              </div>
              <Field name="thumbnail" component={thumbnail =>
                 <div>
                <img src={thumbnail.value} alt="lesson thumbnail"/>
                {this.state.inBrowser ? <ReactCloudinaryUploader {...thumbnail} cloudName="dcvaycxbi" uploadPreset="p24vew5j"/> : <span className="form-control">Loading Uploader</span>}
                {thumbnail.touched && thumbnail.error && <span className="text-danger">{thumbnail.error}</span>}
                </div>
              }/>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Meta</h4>
              </div>
              <div className="form-horizontal p-a-1">
                <div className="form-group row">
                  <label htmlFor="select" className="col-sm-6  form-control-label">Category</label>
                  <div className="col-sm-6">
                    <Field name="category" component={category =>
                     <select {...category} defaultValue="HTML" className="c-select form-control">
                      <option>HTML</option>
                      <option>Angular JS</option>
                      <option>Vue.js</option>
                      <option>CSS / LESS</option>
                      <option>Design / Concept</option>
                    </select>
                    }/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="duration" className="col-sm-6 form-control-label">Duration</label>
                  <div className="col-sm-6">
                    <Field name="duration" component={duration =>
                     <div>
                      <input {...duration} type="number" className="form-control" placeholder="No. of Days"/>
                      {duration.touched && duration.error && <span className="text-danger">{duration.error}</span>}
                     </div>
                    }/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    );
  }
}
