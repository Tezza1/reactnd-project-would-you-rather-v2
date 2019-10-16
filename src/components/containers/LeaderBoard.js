import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import './LeaderBoard.css'

class LeaderBoard extends Component {

  render() {
    if(!this.props.status) {
      return (
        <div>
          <Redirect to='/login' />
        </div>
      )
    }

    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2>Leaderboard</h2>
          <table className="ui very basic collapsing celled table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Number Questions</th>
                <th>Number Answers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4 className="ui image header">
                    {/* <img src="/images/avatar2/small/lena.png" class="ui mini rounded image" /> */}
                    <div className="content">Lena</div>
                  </h4>
                </td>
                <td>22</td>
                <td>33</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return {
    status: state.user.loggedInState
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(LeaderBoard)
