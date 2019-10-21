import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getQuestion } from '../../store/actions/questions'
import Question from './Question_poll.js'
import './Info.css'

class Info extends Component {
  componentDidMount() {
    const { question_id } = this.props.match.params
    this.props.getQuestion(question_id)
  }

  render() {
    const { users } = this.props
    const { question } = this.props
    let quesAuthor = {}
    let status = true

    if(!(_.isEmpty(question))){
      quesAuthor= _.find(users, { 'id': question.author })
    }

    if(_.isEmpty(question) || _.isEmpty(quesAuthor)) {
      return(
        <div className="ui container center aligned card-container">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      )
    }

    return(
      <div className="ui container center aligned card-container">
        <h2>Question poll</h2>
        <div className="ui cards">
          <Question item={question} author={quesAuthor} status={status}/>
         </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    usr: state.user.loggedInUser,
    users: state.user.users,
    question: state.questions.question
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getQuestion: (id) => dispatch(getQuestion(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
