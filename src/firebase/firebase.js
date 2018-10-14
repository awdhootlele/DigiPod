import firebase from 'firebase';

// Initialize Firebase
// const config = {
//     apiKey: 'AIzaSyCYaTKjfam_qMXDnGfcdnBxScEq89VQtLk',
//     authDomain: 'curious-sandbox-196209.firebaseapp.com',
//     databaseURL: 'https://curious-sandbox-196209.firebaseio.com',
//     projectId: 'curious-sandbox-196209',
//     storageBucket: '',
//     messagingSenderId: '1034032747860'
// };

// firebase.initializeApp(config);
// Digipod firebase config
const config = {
  apiKey: 'AIzaSyAbGyU5ukY-RPQYFMjvjLvimjo2BVbOGFA',
  authDomain: 'dev01-b3bd1.firebaseapp.com',
  databaseURL: 'https://dev01-b3bd1.firebaseio.com',
  projectId: 'dev01-b3bd1',
  storageBucket: 'dev01-b3bd1.appspot.com',
  messagingSenderId: '996947583469'
};
firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
  auth,
  database,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
