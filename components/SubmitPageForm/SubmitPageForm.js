
import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import TextEditor from '../TextEditor/TextEditor';

@reduxForm({
  form: 'pageForm'
})
export default class SubmitPageForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    error: PropTypes.string
  };

  state = {
    inBrowser: false
  };

  componentDidMount() {
    this.setState({inBrowser: true}); // eslint-disable-line
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
      error
      } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        {this.errorRender(error)}
        <div>
          <div className="media">
            <div className="media-body">
              <h1 className="page-heading h2">
                Create Page
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
                  <h4 className="card-title">Content</h4>
                </div>
                <div className="card-block">
                  <div>
                    <div className="form-group">
                      <Field name="pageContent" component={pageContent =>
                        <div>
                          {this.state.inBrowser ? <TextEditor {...pageContent}/> : <span className="form-control">Loading Editor</span>}
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
                  <h4 className="card-title">Meta</h4>
                </div>
                <div className="form-horizontal p-a-1">
                  <div className="form-group row">
                    <label htmlFor="order"
                           className="col-sm-6 form-control-label">Order</label>
                    <div className="col-sm-6">
                      <Field name="order" component={order =>
                      <div>
                        <input {...order} type="number" className="form-control" placeholder="#order"/>
                        {order.touched && order.error && <span className="text-danger">{order.error}</span>}
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
