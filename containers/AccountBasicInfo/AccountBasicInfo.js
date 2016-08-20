import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {AccountBasicInfoForm} from 'components';
import { connect } from 'react-redux';
import { updateBasicInfo } from 'redux/actions/auth';

@connect(null, { updateBasicInfo })

export default class AccountBasicInfo extends Component {

  static propTypes = {
    updateBasicInfo: PropTypes.func.isRequired,
  }

  render() {
    // require the logo image both from client and server
    return (
      <div>
        <Helmet title="Sign up"/>
        <AccountBasicInfoForm onSubmit={(viewModel) => this.props.updateBasicInfo(viewModel)}/>
      </div>
    );
  }
}
