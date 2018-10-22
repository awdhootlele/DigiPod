import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  SIGNIN_FACEBOOK_USER,
  SIGNIN_FACEBOOK_USER_SUCCESS,
  SIGNIN_GITHUB_USER,
  SIGNIN_GITHUB_USER_SUCCESS,
  SIGNIN_GOOGLE_USER,
  SIGNIN_GOOGLE_USER_SUCCESS,
  SIGNIN_TWITTER_USER,
  SIGNIN_TWITTER_USER_SUCCESS,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  FORGOT_PASSWORD,
  VERIFY_EMAIL,
  EMAIL_VERIFICATION_SENT,
  EMAIL_VERIFICATION_NOT_SENT
} from 'constants/ActionTypes';

export const forgotPassword = email => {
  return {
    type: FORGOT_PASSWORD,
    payload: email
  };
};

export const forgotPasswordSuccess = message => {
  return {
    type: SHOW_MESSAGE,
    payload: {
      success: message
    }
  };
};

export const verifyEmailAddress = () => {
  return {
    type: VERIFY_EMAIL,
    payload: {}
  };
};

export const verifyEmailAddressSuccess = message => {
  return {
    type: SHOW_MESSAGE,
    payload: {
      success: message
    }
  };
};

export const emailVerificationNotSent = () => {
  return {
    type: EMAIL_VERIFICATION_NOT_SENT,
    payload: {}
  };
};

export const emailVerificationSent = () => {
  return {
    type: EMAIL_VERIFICATION_SENT,
    payload: {}
  };
};

export const userSignUp = user => {
  return {
    type: SIGNUP_USER,
    payload: user
  };
};
export const userSignIn = user => {
  return {
    type: SIGNIN_USER,
    payload: user
  };
};
export const userSignOut = () => {
  return {
    type: SIGNOUT_USER
  };
};
export const userSignUpSuccess = authUser => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: authUser
  };
};

export const userSignInSuccess = (authUser, emailVerified) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: { userId: authUser, emailVerified }
  };
};
export const userSignOutSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS
  };
};

export const showAuthMessage = message => {
  return {
    type: SHOW_MESSAGE,
    payload: {
      error: message
    }
  };
};

export const userGoogleSignIn = () => {
  return {
    type: SIGNIN_GOOGLE_USER
  };
};
export const userGoogleSignInSuccess = authUser => {
  return {
    type: SIGNIN_GOOGLE_USER_SUCCESS,
    payload: authUser
  };
};
export const userFacebookSignIn = () => {
  return {
    type: SIGNIN_FACEBOOK_USER
  };
};
export const userFacebookSignInSuccess = authUser => {
  return {
    type: SIGNIN_FACEBOOK_USER_SUCCESS,
    payload: authUser
  };
};
export const setInitUrl = url => {
  return {
    type: INIT_URL,
    payload: url
  };
};
export const userTwitterSignIn = () => {
  return {
    type: SIGNIN_TWITTER_USER
  };
};
export const userTwitterSignInSuccess = authUser => {
  return {
    type: SIGNIN_TWITTER_USER_SUCCESS,
    payload: authUser
  };
};
export const userGithubSignIn = () => {
  return {
    type: SIGNIN_GITHUB_USER
  };
};
export const userGithubSignInSuccess = authUser => {
  return {
    type: SIGNIN_GITHUB_USER_SUCCESS,
    payload: authUser
  };
};
export const showAuthLoader = () => {
  return {
    type: ON_SHOW_LOADER
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE
  };
};
export const hideAuthLoader = () => {
  return {
    type: ON_HIDE_LOADER
  };
};
