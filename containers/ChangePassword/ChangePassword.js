import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {ChangePasswordForm} from 'components';
import { connect } from 'react-redux';
import { changePassword } from 'redux/actions/auth';

@connect(null, { changePassword })

export default class ChangePassword extends Component {

  static propTypes = {
    changePassword: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <Helmet title="Change Password"/>
        <ChangePasswordForm onSubmit={(viewModel)=> this.props.changePassword(viewModel)}/>
      </div>
    );
  }
}
