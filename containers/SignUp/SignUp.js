import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {SignupForm} from 'components';
import { connect } from 'react-redux';
import { signup } from 'redux/actions/auth';

@connect(null, { signup })

export default class SignUp extends Component {

  static propTypes = {
    signup: PropTypes.func.isRequired,
  }

  handleSubmit = (viewModel) => {
    return this.props.signup(viewModel);
  }

  render() {
    // require the logo image both from client and server
    return (
      <div className="container-fluid">
        <Helmet title="Sign up"/>
        <div className="row">
          <div className="col-sm-8 col-sm-push-1 col-md-4 col-md-push-3 col-lg-4 col-lg-push-4">
            <div className="center m-a-2">
              <div className="icon-block img-circle">
                <i className="material-icons md-36 text-muted">edit</i>
              </div>
            </div>
            <div className="card">
              <div className="card-header bg-white center">
                <h4 className="card-title">Sign Up</h4>
                <p className="card-subtitle">Create a new account</p>
              </div>
              <div className="p-a-2">
                <SignupForm onSubmit={this.handleSubmit}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
