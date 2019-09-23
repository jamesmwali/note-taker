import {GET_NOTES, NOTES_STATUS} from '../actionTypes';
import {database} from '../../../utilities/firebase';

export function getNotes() {

  return (dispatch) => {

    // ? Show loading to true
    dispatch({
      type: NOTES_STATUS,
      payload: true,
    });

    database.on('value', snapshot => {
      dispatch({
        type: GET_NOTES,
        payload: snapshot.val(),
      });
      // ? once notes are received

      dispatch({
        type: NOTES_STATUS,
        payload: false,
      });

      // ? Wait until something changes and try again.

    }, () => dispatch({type: NOTES_STATUS, payload: -1}));
  };
}

export function saveNote(note) {

  return (dispatch) => {
    database.push(note);
  };
}

export function deleteNote(id) {
  return dispatch => database.child(id).remove();
}