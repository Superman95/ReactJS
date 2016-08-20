import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';

@reduxForm({
  form: 'signupForm'
})
export default class SignupForm extends Component {
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
        <form onSubmit={handleSubmit}>
          {this.errorRender(error)}
          <div className="form-group">
            <Field name="name" component={name =>
              <div>
                <input type="text" className="form-control" {...name} placeholder="Full Name"/>
                {name.touched && name.error && <span className="text-danger">{name.error}</span>}
              </div>
              }/>
          </div>
          <div className="form-group">
            <Field name="email" component={email =>
              <div>
                <input type="text" placeholder="Email Address" className="form-control" {...email}/>
                {email.touched && email.error && <span className="text-danger">{email.error}</span>}
              </div>
              }/>
          </div>
          <div className="form-group">
            <Field name="password" component={password =>
              <div>
                <input type="password" placeholder="Password" className="form-control" {...password}/>
                {password.touched && password.error && <span className="text-danger">{password.error}</span>}
              </div>
              }/>
          </div>
          <div className="form-group">
            <Field name="confirmPassword" component={confirmPassword =>
              <div>
                <input type="password" placeholder="Confirm Password" className="form-control" {...confirmPassword}/>
                {confirmPassword.touched && confirmPassword.error && <span>{confirmPassword.error}</span>}
              </div>
              }/>
          </div>
          <div className="form-group center">
            <Field name="termsOfUse" component={termsOfUse =>
              <div>
                <label className="c-input c-checkbox">
                    <input {...termsOfUse} type="checkbox"/>
                  <span className="c-indicator"></span>
                  I agree to the <a href="#">Terms of Use</a>
                  </label>
                {termsOfUse.error && termsOfUse.touched && <div className="text-danger">{termsOfUse.error}</div>}
              </div>
              }/>
          </div>
          <p className="center">
            <button type="submit" disabled={submitting} className="btn btn-primary btn-rounded btn-block" onClick={handleSubmit}>Sign Up
            </button>
          </p>
          <div className="center">Already signed up? <a href="/login">Log in</a></div>
        </form>
      </div>
    );
  }
}
