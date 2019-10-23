import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPage } from '../../store/actions/navigation'
import _ from 'lodash'
import './LeaderBoard.css'

class LeaderBoard extends Component {

  componentDidMount() {
    this.props.setPage('leader')
  }

  render() {
    const { users } = this.props
    let sortedUsers = _.orderBy(users, i => i.questions.length + _.keys(i.answers).length, ['desc'])
    const getResult = (a , b) => a + b

    return (
      <div className="ui container center aligned form-container ">
        <div className="ui middle aligned center aligned grid">
          <div className="column leader-container">
            <h2>Leaderboard</h2>
            <table className="ui very basic collapsing celled table leader-table">
              <thead>
                <tr>
                  <th className="center aligned">Name</th>
                  <th className="center aligned">Number Questions</th>
                  <th className="center aligned">Number Answers</th>
                  <th className="center aligned">Total</th>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.loggedInUser,
    users: state.user.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPage: (page) => dispatch(setPage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)
