import React, {Component, PropTypes} from 'react';
import {reduxForm, Field} from 'redux-form';

@reduxForm({
  form: 'loginForm'
})
export default class LoginForm extends Component {
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
            <Field name="email" component={email =>
              <div>
                <input type="text" placeholder="Email Address" className="form-control" {...email} placeholder="Username"/>
                {email.touched && email.error && <span className="text-danger">{email.error}</span>}
              </div>
              }/>
          </div>
          <div className="form-group">
            <Field name="password" component={password =>
              <div>
                <input type="password" placeholder="Password" className="form-control" {...password} placeholder="Username"/>
                {password.touched && password.error && <span className="text-danger">{password.error}</span>}
              </div>
              }/>
          </div>
          <div className="form-group">
            <button type="submit" disabled={submitting} className="btn btn-primary btn-block btn-rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
