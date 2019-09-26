import * as firebase from 'firebase';
import environment from '../../environment-variables'

/* Your web app's Firebase configuration*/

var firebaseConfig = {
  apiKey: `${environment.apiKey}`,
  authDomain: 'diary-be7e6.firebaseapp.com',
  databaseURL: 'https://diary-be7e6.firebaseio.com',
  projectId: 'diary-be7e6',
  storageBucket: '',
  messagingSenderId: '799850848079',
  appId: `${environment.appId}`,
};
// ? Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref('/notes');

// ? Firebase Authentication creation.

// ? Auth instance
export const auth = firebase.auth();

// * Google instance
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// * Twitter instance
export const twitterProvider = new firebase.auth.TwitterAuthProvider();







