import React, { Component } from 'react'
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
import LeaderBoard from './containers/LeaderBoard'
import AddQuestion from './containers/AddQuestion'

class App extends Component {
  componentDidMount() {
    this.props.getUsers()
    this.props.getQuestions()
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu />
          <MainTitle />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='/add' component={AddQuestion} />
            <Redirect from='*' to='/' />
          </Switch>
        </BrowserRouter>
     </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(handleGetUsers()),
    getQuestions: () => dispatch(handleGetQuestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
