import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { LoginForm } from 'components';
import { connect } from 'react-redux';
import { login } from 'redux/actions/auth';
import { Link } from 'react-router';

@connect(({auth})=> ({
  error: auth.get('error')
}), { login })

export default class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  handleSubmit = (viewModel) => {
    return this.props.login(viewModel);
  }

  render() {
    const { error } = this.props;
    return (
      <div className="container-fluid">
        <Helmet title="Login"/>
        <div className="row">
          <div className="col-sm-8 col-sm-push-1 col-md-4 col-md-push-4 col-lg-4 col-lg-push-4">
            <div className="center m-a-2">
              <div className="icon-block img-circle">
                <i className="material-icons md-36 text-muted">lock</i>
              </div>
            </div>
            <div className="card bg-transparent">
              <div className="card-header bg-white center">
                <h4 className="card-title">Login</h4>
                <p className="card-subtitle">Access your account</p>
              </div>
              <div className="p-a-2">
                <LoginForm serverError={error} onSubmit={this.handleSubmit}/>
              </div>
              <div className="card-footer center bg-white">
                Not yet a student? <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
