import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upDateUserQuestion  } from '../../store/actions/user'
import { setPage } from '../../store/actions/navigation'
import _ from 'lodash'
import './LeaderBoard.css'

class LeaderBoard extends Component {

  componentDidMount() {
    this.props.updateU(this.props.user, this.props.newQs)
    this.props.setPage('leader')
  }

  render() {
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

const mapStateToProps = state => {
  return {
    user: state.user.loggedInUser,
    users: state.user.users,
    newQs: state.questions.newQs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPage: (page) => dispatch(setPage(page)),
    updateU: (uid, qs) => dispatch(upDateUserQuestion(uid, qs))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)
