import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUser } from '../../store/actions/user'
import './Menu.css'

class Menu extends Component {
  render() {
    return(
    <div className="ui container center aligned button-container">
      <div className='ui secondary pointing menu'>
        <Link className='item' to='/'>
          Home
        </Link>
        <Link className='item' to='/leaderboard'>
          Leader Board
        </Link>
        <Link className='item' to='/add'>
          Add question
        </Link>
        <div className='right menu'>
          <div className='user'>{this.props.usr}</div>
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
    usr: state.user.loggedInUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOutUser ())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
