import * as firebase from 'firebase';

/* Your web app's Firebase configuration*/

var firebaseConfig = {
  apiKey: 'AIzaSyAikLq8P7HrRglOxFB2vNMnbCGxAPnnMMM',
  authDomain: 'diary-be7e6.firebaseapp.com',
  databaseURL: 'https://diary-be7e6.firebaseio.com',
  projectId: 'diary-be7e6',
  storageBucket: '',
  messagingSenderId: '799850848079',
  appId: '1:799850848079:web:81f45c9835a34f15feef3a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref('/notes');




