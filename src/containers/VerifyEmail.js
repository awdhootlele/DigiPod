import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { NotificationManager } from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  hideMessage,
  showAuthLoader,
  hideAuthLoader,
  verifyEmailAddress,
  userSignOut,
  emailVerificationNotSent
} from 'actions/Auth';

class VerifyEmail extends React.Component {
  constructor() {
    super();
    this.state = {
      showToasterMessage: false
    };
  }

  componentDidMount() {
    // TODO - Remove following line once 'emailVerificationSent' functionality is fully implemented.
    // TODO - 1 small issue with react notifications. If error toaster is shown on signup page and immediately we jump to this page,
    // and click on verify email, previous error toaster is shown alonf wwith current success/error toaster.
    // Reason - We have to manually kill the toaster / wait for the toaster to close before moving to new route
    this.props.emailVerificationNotSent();
  }

  componentWillReceiveProps(newProps) {
    const { showMessage } = this.props;
    if (newProps.showMessage && !showMessage) {
      this.setState({ showToasterMessage: newProps.showMessage });
    }
  }

  componentDidUpdate() {
    this.hideNotifications(this.props.showMessage);
  }

  hideNotifications(showMessage) {
    if (showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
  }

  verifyEmail() {
    this.props.showAuthLoader();
    this.props.verifyEmailAddress();
  }

  gotoSignIn() {
    this.props.userSignOut();
    this.props.history.push('/signin');
  }

  showNotification(showToasterMessage, successMessage, alertMessage) {
    if (showToasterMessage && alertMessage) {
      return NotificationManager.error(alertMessage);
    }
    if (showToasterMessage && successMessage) {
      return NotificationManager.success(successMessage);
    }
  }
  render() {
    // Note - Ideally once the verification link is sent, we should not send it again and again (use 'emailVerificationSent' flag for check)
    // TODO - And also, 'emailVerificationSent' needs to be mapped per user - needs to be stored to the database.
    // TODO - But, right now, we dont have any control over firebase email template, no way to check if the verification link once sent is still valid or invalid. - Do some research over it
    const {
      loader,
      alertMessage,
      successMessage,
      hideAuthLoader,
      emailVerificationSent
    } = this.props;
    const { showToasterMessage } = this.state;

    if (showToasterMessage) {
      hideAuthLoader();
    }
    return (
      <div className="app-login-container app-verify-email-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">
          <div className="app-verify-email-content">
            <div className="app-login-header mb-4">
              <h1 className="text-center">
                {/* <IntlMessages id="Digipod login" /> */}
                Verify your email address
              </h1>

              {!emailVerificationSent && (
                <h4>
                  To access the application, your email address must be
                  verified. We will send you confirmation link on your
                  registered email address.
                </h4>
              )}
              {emailVerificationSent && (
                <h4>
                  Verification link has been sent to your registered email.
                  Please check your email and verify your account.
                </h4>
              )}
            </div>

            <div className="app-login-form">
              {!emailVerificationSent && (
                <Button
                  onClick={() => {
                    this.verifyEmail();
                  }}
                  variant="raised"
                  color="primary"
                  className="jr-btn text-capitalize text-white btn-block"
                >
                  Verify my email
                </Button>
              )}
              {emailVerificationSent && (
                <Button
                  onClick={this.gotoSignIn.bind(this)}
                  variant="raised"
                  color="primary"
                  className="btn btn-primary jr-btn text-capitalize text-white btn-block"
                >
                  SignIn
                </Button>
              )}
            </div>
          </div>
        </div>
        {loader && (
          <div className="loader-view">
            <CircularProgress />
          </div>
        )}
        {this.showNotification(
          showToasterMessage,
          successMessage,
          alertMessage
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const {
    loader,
    alertMessage,
    successMessage,
    showMessage,
    authUser,
    emailVerified,
    emailVerificationSent
  } = auth;
  return {
    loader,
    alertMessage,
    successMessage,
    showMessage,
    authUser,
    emailVerified,
    emailVerificationSent
  };
};

export default connect(
  mapStateToProps,
  {
    hideMessage,
    showAuthLoader,
    hideAuthLoader,
    verifyEmailAddress,
    userSignOut,
    emailVerificationNotSent
  }
)(VerifyEmail);
