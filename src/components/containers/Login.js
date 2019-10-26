import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash'
import { logInUser } from '../../store/actions/user'
import './Login.css'

class Login extends Component {
  state={
    checkedUser: '',
    errors: ''
  }

  radioChangeHandler = e => {
    this.setState({
      checkedUser: e.target.value
    })
  }

  buttonClickHandler = e => {
    e.preventDefault()
    let usr = this.state.checkedUser
    const alert = (
      <div className="ui warning message">
        <div className="header">
          Select a user
          <i className="exclamation icon"></i>
        </div>
      </div>
    )

    if (usr === ''){
      this.setState({
        errors: alert
      })
    } else {
      this.props.login(usr)
    }
  }

  render () {
    const { users } = this.props
    let ordered_users = _.orderBy(users, ['name'], ['asc'])

    if(this.props.status) {
      if(!_.isNil(this.props.location.state)){
        if(this.props.location.state.fromError){
          return <Redirect to='/error' />
        }
      }
      return <Redirect to='/' />
    }


    if(!users.length) {
      return(
        <div className="ui container center aligned card-container">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      )
    }

    return (
      <div className="ui container center aligned form-container ">
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
                    {ordered_users.map(usr =>(
                      <div className="field" key={usr.id}>
                        <div className="ui radio checkbox">
                          <input
                            type="radio"
                            name="loginUser"
                            value={usr.id}
                            onChange={this.radioChangeHandler}
                          />
                          <label>{usr.name}</label>
                        </div>
                      </div>
                    ))}
                </div>
                <button
                  className="ui fluid large black button"
                  onClick={this.buttonClickHandler}
                >Login</button>
              </div>
            </form>
            {this.state.errors}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      users: state.user.users,
      status: state.user.loggedInState
    }
};

const mapDispatchToProps = dispatch => {
    return {
      login: (usr) => dispatch(logInUser(usr))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)
