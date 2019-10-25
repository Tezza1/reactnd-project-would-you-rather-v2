import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleGetQuestions } from '../store/actions/questions'
import { handleGetUsers } from '../store/actions/user'
// components ----------------------
import Menu from './pageLayout/Menu'
import MainTitle from './pageLayout/MainTitle'
import Home from './containers/Home'
import Login from './containers/Login'
import Error from './containers/Error'
import LeaderBoard from './containers/LeaderBoard'
import Add from './containers/Add'
import Info from './containers/Info'

class App extends Component {
  componentDidMount() {
    this.props.getUsers()
    this.props.getQuestions()
  }

  render () {
    return (
      <Fragment>
        <BrowserRouter>
          <Menu />
          <MainTitle />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/error' component={Error} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='/add' component={Add} />
            <Route path='/questions/:question_id' component={Info} />
            {/* <Redirect from='*' to='/' /> */}
            <Redirect from='*' to={{
              pathname: '/login',
              state: {
                fromError: true
              }
            }}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(handleGetUsers()),
    getQuestions: () => dispatch(handleGetQuestions())
  }
}

export default connect(null, mapDispatchToProps)(App)
