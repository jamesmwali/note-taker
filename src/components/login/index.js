import React, {Component} from 'react';
import {connect} from 'react-redux';
import {googleLogin, twitterLogin} from '../../redux/actions/user/userActions';
import {withRouter} from 'react-router-dom';

class Login extends Component {

  componentWillUpdate() {
    const {user, userLoading} = this.props;

    console.log('-->', !userLoading && user !== null);

    if (!userLoading && user !== null) {
      this.props.history.push('/');
      window.location.replace("/");
    }
  }

  componentWillMount() {
    console.log("--- will mount");
    const {user, userLoading} = this.props;

    console.log('-->', !userLoading && user !== null);

    if (!userLoading && user !== null) {
      this.props.history.push('/');
      window.location.replace("/");
    }
  }


  componentWillReceiveProps(nextProps) {
    console.log("login");

    if (nextProps.user !== null) {
      this.props.history.push('/');

    }
  }

  render() {

    return (
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-sm-12 jumbotron" style={{marginTop: -20}}>

              <h1> NOTES - {new Date().getFullYear()}</h1>

              <h2> <i>Login with your favourite <b>Social Network</b> to start writing</i></h2>

            </div>

            <div className="col-sm-6">

              <button className="btn btn-danger btn-lg"
                      onClick={this.props.googleLogin}>
                Login with Google
              </button>

            </div>

            <div className="col-sm-6">

              <button className="btn btn-primary btn-lg"
                      onClick={this.props.twitterLogin}>
                Login with Twitter
              </button>

            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default withRouter(
    connect(mapStateToProps, {googleLogin, twitterLogin})(Login));