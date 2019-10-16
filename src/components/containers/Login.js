import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInUser } from '../../store/actions/user'
import './Login.css'

class Login extends Component {
  state={
    checkedUser: '',
  }

  radioChangeHandler = e => {
    this.setState({
      checkedUser: e.target.value
    })
  }

  buttonClickHandler = e => {
    e.preventDefault()
    let usr = this.state.checkedUser
    if (usr === ''){
      alert('Select a user')
    } else {
      this.props.login(usr)
    }
  }

  render () {
    if(this.props.status) {
      return (
        <div>
          <Redirect to='/' />
        </div>
      )
    }

    return (
      <div className="form-container container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui image header">
              <div className="content">
                Log-in to your account
              </div>
            </h2>
            <form className="ui form">
              <div className="ui stacked segment left aligned">
                <div className="grouped fields">
                  <label>Select user:</label>
                    {this.props.usrNames.map(usr =>{
                      return (
                        <div className="field" key={usr}>
                          <div className="ui radio checkbox">
                            <input
                              type="radio"
                              name="loginUser"
                              value={usr}
                              onChange={this.radioChangeHandler}
                            />
                            <label>{usr}</label>
                          </div>
                        </div>
                      )
                    })}
                </div>
                <button
                  className="ui fluid large black button"
                  onClick={this.buttonClickHandler}
                >Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      usrs: state.user.users,
      usrNames: state.user.userNames,
      status: state.user.loggedInState
    }
};

const mapDispatchToProps = dispatch => {
    return {
      login: (usr) => dispatch(logInUser(usr))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)
