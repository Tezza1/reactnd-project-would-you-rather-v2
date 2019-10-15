import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

class Menu extends Component {

  render() {
    return(
      <div className='ui secondary pointing menu'>
        <Link className='active item' to='/'>
          Home
        </Link>
        <Link className='item' to='/leaderboard'>
          Leader Board
        </Link>
        <Link className='item' to='/add-question'>
          Add question
        </Link>
        <Link className='item' to='/login'>
          Login
        </Link>
        <div className='right menu'>
          <button className='ui item' href='#!'>
            <i className='user circle icon'></i>
            Logout
          </button>
        </div>
      </div>
    )
  }
}

export default Menu
