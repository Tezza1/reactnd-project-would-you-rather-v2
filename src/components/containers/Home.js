import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import _ from 'lodash'
import './Home.css'
import Question from './Question'
import QuestionDone from './Question_done'

class Home extends Component {

  state = {
    showContainer: 'unanswered'
  }

  handleClick = (status) => {
    this.setState({
      showContainer: status
    })
  }

  render() {
    if(!this.props.status) {
      return (
        <div>
          <Redirect to='/login' />
        </div>
      )
    }

    let { users } = this.props
    let { user } = this.props
    const { questions } = this.props

    let keysQ = _.map(questions, 'id')  // keysQ.map(q => q.id)
    let answeredQs = _.keys(users[user].answers)
    let unansweredQs = _.difference(keysQ, answeredQs)

    if(!questions.length) {
      return(
        <div className="ui container center aligned card-container">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      )
    }

  return(
    <div>
      <div className="ui container center aligned button-container">
        <div className="ui animated button" tabindex="0" onClick={() => this.handleClick("unanswered")}>
          <div className="visible content">Unanswered Questions</div>
          <div className="hidden content">
            <i className="right arrow icon"></i>
          </div>
        </div>
        <div className="ui animated button" tabindex="0" onClick={() => this.handleClick("answered")}>
          <div className="visible content">Answered Questions</div>
          <div className="hidden content">
            <i className="right arrow icon"></i>
          </div>
        </div>
      </div>
        {this.state.showContainer === 'unanswered' ? (
          <div className="ui container center aligned card-container">
            <h2>Unanswered questions</h2>
            <div className="ui cards">
              {unansweredQs.map(idNum => <Question item={_.find(questions, {id: idNum})}/> )}
            </div>
          </div>
        ) :(
          <div className="ui container center aligned card-container">
            <h2>Answered questions</h2>
            <div className="ui cards">
              {answeredQs.map(idNum => <QuestionDone item={_.find(questions, {id: idNum})}/> )}
            </div>
          </div>
        )}
    </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    status: state.user.loggedInState,
    user: state.user.loggedInUser,
    users: state.user.users,
    questions: state.questions.questions
  }
}

export default connect(mapStateToProps)(Home)
