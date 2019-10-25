import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUser } from '../../store/actions/user'

class Menu extends Component {
  render() {

    if(!this.props.status) {
      return (
        <Redirect to={{
          pathname: '/login',
          state: {
            fromError: false
          }
        }}/>
      )
    }

    return(
    <div className="ui container center aligned button-container">
      <div className='ui secondary pointing stackable menu'>
        <Link className={this.props.page === 'home' ? 'active item' : 'item'} to='/'>
          Home
        </Link>
        <Link className={this.props.page === 'leader' ? 'active item' : 'item'} to='/leaderboard'>
          Leader Board
        </Link>
        <Link className={this.props.page === 'add' ? 'active item' : 'item'} to='/add'>
          Add question
        </Link>
        <div className='right menu'>
          <div className='item'>{this.props.usr}</div>
          <button className='ui item button' onClick={this.props.logout}>
            <i className='user circle icon'></i>
            Logout
          </button>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    status: state.user.loggedInState,
    usr: state.user.loggedInUser,
    page: state.navigation.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOutUser ())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
