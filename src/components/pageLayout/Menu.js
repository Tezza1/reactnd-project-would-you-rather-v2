import React, { Component } from 'react'
import './Menu.css'

class Menu extends Component {

  render() {
    return(
      <div className='ui secondary pointing menu'>
        <a className='active item' href='#!'>
          Home
        </a>
        <a className='item' href='#!'>
          Leader Board
        </a>
        <a className='item' href='#!'>
          Add question
        </a>
        <div className='right menu'>
          <a className='ui item' href='#!'>
            <i className='user circle icon'></i>
            Logout
          </a>
        </div>
      </div>
    )
  }
}

export default Menu
