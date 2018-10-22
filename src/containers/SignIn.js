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
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn,
  forgotPassword
} from 'actions/Auth';
import ForgotPassword from './forgotPassword';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      forgotPassword: false
    };
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }

  toggleForgotPasswordModal(forgotPassword) {
    this.setState({ forgotPassword });
  }

  handleRequestSubmit({ email }) {
    this.toggleForgotPasswordModal(false);
    this.props.showAuthLoader();
    this.props.forgotPassword({ email });
  }

  showNotification(showMessage, successMessage, alertMessage) {
    if (showMessage && alertMessage) {
      return NotificationManager.error(alertMessage);
    }
    if (showMessage && successMessage) {
      return NotificationManager.success(successMessage);
    }
  }

  render() {
    const { email, password, forgotPassword } = this.state;
    const {
      showMessage,
      loader,
      alertMessage,
      successMessage,
      hideAuthLoader
    } = this.props;
    if (showMessage) {
      hideAuthLoader();
    }
    return (
      <div className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">
          <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="Jambo">
              <img
                src="http://via.placeholder.com/177x65"
                alt="jambo"
                title="jambo"
              />
            </Link>
          </div>

          <div className="app-login-content">
            <div className="app-login-header mb-4">
              <h1>
                <IntlMessages id="Digipod login" />
              </h1>
            </div>

            <div className="app-login-form">
              <form>
                <fieldset>
                  <TextField
                    label={<IntlMessages id="appModule.email" />}
                    fullWidth
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                    defaultValue={email}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />
                  <TextField
                    type="password"
                    label={<IntlMessages id="appModule.password" />}
                    fullWidth
                    onChange={event =>
                      this.setState({ password: event.target.value })
                    }
                    defaultValue={password}
                    margin="normal"
                    className="mt-1 my-sm-3"
                  />

                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <Button
                      onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userSignIn({ email, password });
                      }}
                      variant="raised"
                      color="primary"
                    >
                      <IntlMessages id="appModule.signIn" />
                    </Button>
                  </div>
                  <div className="my-1 my-sm-3">
                    <a
                      className="forgot-password-link"
                      onClick={() => {
                        this.toggleForgotPasswordModal(true);
                      }}
                    >
                      Forgot Password ?
                    </a>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        {loader && (
          <div className="loader-view">
            <CircularProgress />
          </div>
        )}
        {this.showNotification(showMessage, successMessage, alertMessage)}
        {forgotPassword && (
          <ForgotPassword
            open={forgotPassword}
            handleRequestClose={() => this.toggleForgotPasswordModal(false)}
            handleRequestSubmit={this.handleRequestSubmit.bind(this)}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { loader, alertMessage, successMessage, showMessage, authUser } = auth;
  return { loader, alertMessage, successMessage, showMessage, authUser };
};

export default connect(
  mapStateToProps,
  {
    userSignIn,
    hideMessage,
    showAuthLoader,
    hideAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn,
    forgotPassword
  }
)(SignIn);
