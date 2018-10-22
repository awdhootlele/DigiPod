import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  SIGNIN_FACEBOOK_USER_SUCCESS,
  SIGNIN_GITHUB_USER_SUCCESS,
  SIGNIN_GOOGLE_USER_SUCCESS,
  SIGNIN_TWITTER_USER_SUCCESS,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  EMAIL_VERIFICATION_SENT,
  EMAIL_VERIFICATION_NOT_SENT
} from 'constants/ActionTypes';

const INIT_STATE = {
  loader: false,
  alertMessage: '',
  successMessage: '',
  showMessage: false,
  initURL: '',
  authUser: localStorage.getItem('user_id'),
  emailVerified: localStorage.getItem('email_verified') === 'true',
  emailVerificationSent: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMAIL_VERIFICATION_SENT: {
      return {
        ...state,
        emailVerificationSent: true
      };
    }
    case EMAIL_VERIFICATION_NOT_SENT: {
      return { ...state, emailVerificationSent: false };
    }
    case SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case SIGNIN_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload.userId,
        emailVerified: action.payload.emailVerified,
        initURL: ''
      };
    }
    case INIT_URL: {
      return {
        ...state,
        initURL: action.payload
      };
    }
    case SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        authUser: null,
        initURL: '/app/dashboard/default',
        loader: false
      };
    }

    case SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload.error || '',
        successMessage: action.payload.success || '',
        showMessage: true,
        loader: false
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: '',
        successMessage: '',
        showMessage: false,
        loader: false
      };
    }

    case SIGNIN_GOOGLE_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case SIGNIN_FACEBOOK_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case SIGNIN_TWITTER_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case SIGNIN_GITHUB_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true
      };
    }
    case ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false
      };
    }
    default:
      return state;
  }
};
