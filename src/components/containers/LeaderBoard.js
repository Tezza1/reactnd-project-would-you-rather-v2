import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import _ from 'lodash'
import './LeaderBoard.css'

class LeaderBoard extends Component {

  render() {
    if(!this.props.status) {
      return <Redirect to='/login' />
    }

    const { users } = this.props
    let sortedUsers = _.sortBy(users, i => i.questions.length + _.keys(i.answers).length)
    const getResult = (a , b) => a + b

    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column leader-container">
          <h2>Leaderboard</h2>
          <table className="ui very basic collapsing celled table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Number Questions</th>
                <th>Number Answers</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map(user => (
                <tr key={user.id}>
                  <td>
                    <h4 className="ui image header">
                      <img src={user.avatarURL} className="ui mini rounded image" alt="Profile" />
                      <div className="content">{user.name}</div>
                    </h4>
                  </td>
                  <td className="center aligned">{user.questions.length}</td>
                  <td className="center aligned">{_.keys(user.answers).length}</td>
                  <td className="center aligned"><strong>{getResult(_.keys(user.answers).length, user.questions.length)}</strong></td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    status: state.user.loggedInState,
    users: state.user.users
  }
}


export default connect(mapStatetoProps)(LeaderBoard)
