import {auth, googleProvider, twitterProvider} from '../../../utilities/firebase';

export function googleLogin() {
  return dispatch => auth.signUpWithPopUp(googleProvider);
}

export function twitterLogin(){
  return dispatch => auth.signUpWithPopUp(twitterProvider);
}