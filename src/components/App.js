import React, {Component} from 'react';
import {clearForm} from '../utilities';
import * as _ from 'lodash';
import {connect} from 'react-redux';
import {
  deleteNote,
  getNotes,
  saveNote,
} from '../redux/actions/notes/notesActions';
import NoteCard from '../components/note-card';
import {getUser} from '../redux/actions/user/userActions';
import {Link} from 'react-router-dom';
import environment from '../../environment-variables'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {},
      notes: {},
    };
  }

  handleChange(e) {
    let {name, value} = e.target;
    let {form} = this.state;

    form = Object.assign(form, {[name]: value});
    this.setState({form});

  }

  handleSubmit(e) {
    e.preventDefault();
    let {form} = this.state;

    let notes = {
      title: form.title,
      body: form.body,
      uid: this.props.user.uid,
    };

    //? database.push(notes);
    // ? replaced with a function from the redux actions.

    this.props.saveNote(notes);
    this.setState({form: {}}, () => clearForm(this));

  }

  renderNotes() {

    return _.map(this.props.notes, (note, index) => {

      return (
          <NoteCard key={index}>
            <Link to={`note/${index}`}>
              <h2>{note.title}</h2>
            </Link>

            <p>{note.body}</p>

            {note.uid === this.props.user.uid &&

            <button className="btn btn-danger"
                    onClick={() => this.props.deleteNote(index)}>Delete</button>
            }
          </NoteCard>
      );
    });

  }

  //life cycles
  componentDidMount() {
    //?  function from the redux actions.
    // this.props.getNotes();
    // this.props.getUser();
  }

  render() {


    return (
        <div className="container-fluid" style={{paddingTop: 20}}>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <form onSubmit={this.handleSubmit.bind(this)}
                    style={{paddingBottom: 20}}>
                <div className="form-group">

                  <input type="text" name="title" value={this.state.form.title}
                         onChange={this.handleChange.bind(this)}
                         className="form-control no-border"
                         placeholder="Title..." required={true}/>
                </div>

                <div className="form-group">

                  <textarea name="body" style={{resize: 'none', minHeight: 100}}
                            onChange={this.handleChange.bind(this)}
                            value={this.state.form.body}
                            className="form-control no-border"
                            placeholder="Body..." required={true}/>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary col-sm-12"> Save</button>
                </div>

              </form>
              <br/>
              {this.renderNotes()}
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user,
  };
}

//?  function from the redux actions.

export default connect(mapStateToProps,
    {getNotes, saveNote, deleteNote, getUser})(App);
