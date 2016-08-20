import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

@connect(({auth})=>({ initialValues: auth.get('user').toJS() }))
@reduxForm({
  form: 'accountBasicInfoForm'
})
export default class AccountBasicInfoForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool,
    error: PropTypes.string
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
      submitting,
      error
      } = this.props;
    return (
      <div>
        <div className="p-a-2 tab-content">
          <div className="tab-pane active" id="first">
            <form onSubmit={handleSubmit} className="form-horizontal">
              {this.errorRender(error)}
              <div className="form-group row">
                <label htmlFor="name" className="col-sm-3 form-control-label">Name</label>
                <div className="col-md-6">
                  <Field name="name" component={name =>
                          <div>
                            <input type="text" placeholder="Name" className="form-control" {...name} placeholder="Name"/>
                            {name.touched && name.error && <span className="text-danger">{name.error}</span>}
                          </div>
                          }/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-sm-3 form-control-label">Email</label>
                <div className="col-sm-6 col-md-6">

                  <Field name="email" component={email =>
                         <div>
                           <div className="input-group">
                              <span className="input-group-addon" id="basic-addon1">
                                <i className="material-icons md-18 text-muted">mail</i>
                              </span>
                              <input type="text" placeholder="Email" className="form-control" {...email} placeholder="Email"/>
                            </div>
                            {email.touched && email.error && <span className="text-danger">{email.error}</span>}
                          </div>
                          }/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-8 col-sm-offset-3">
                  <div className="media">
                    <div className="media-left">
                      <button type="submit" disabled={submitting} className="btn btn-success btn-rounded">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
