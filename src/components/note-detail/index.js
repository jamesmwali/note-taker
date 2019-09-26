import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filter} from 'lodash';
import {Link, withRouter} from 'react-router-dom';


class NoteDetail extends Component {


  render(){

    const {note} = this.props;


    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">

              <h1>{note.title}</h1>
              <p>{note.body}</p>

              <Link to="/">Back</Link>
            </div>
          </div>

        </div>
    )
  }

}


function mapStateToProps(state, ownProps){
  return {
    note: state.notes[ownProps.match.params.id],
    uid: state.user.uid
  }
}

export default withRouter(connect(mapStateToProps)(NoteDetail))