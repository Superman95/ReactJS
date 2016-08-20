import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';

@reduxForm({
  form: 'changePasswordForm'
})
export default class ChangePasswordForm extends Component {
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
                <label htmlFor="currentPassword" className="col-sm-3 form-control-label">Current Password</label>
                <div className="col-md-6">
                  <Field name="currentPassword" component={currentPassword =>
                          <div>
                            <input type="password" placeholder="Name" className="form-control" {...currentPassword} placeholder="Current Password"/>
                            {currentPassword.touched && currentPassword.error && <span className="text-danger">{currentPassword.error}</span>}
                          </div>
                          }/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="newPassword" className="col-sm-3 form-control-label">New Password</label>
                <div className="col-md-6">
                  <Field name="newPassword" component={newPassword =>
                          <div>
                            <input type="password" placeholder="Name" className="form-control" {...newPassword} placeholder="New Password"/>
                            {newPassword.touched && newPassword.error && <span className="text-danger">{newPassword.error}</span>}
                          </div>
                          }/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="confirmNewPassword" className="col-sm-3 form-control-label">Confirm New Password</label>
                <div className="col-md-6">
                  <Field name="confirmNewPassword" component={confirmNewPassword =>
                          <div>
                            <input type="password" placeholder="Name" className="form-control" {...confirmNewPassword} placeholder="Confirm New Password"/>
                            {confirmNewPassword.touched && confirmNewPassword.error && <span className="text-danger">{confirmNewPassword.error}</span>}
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
