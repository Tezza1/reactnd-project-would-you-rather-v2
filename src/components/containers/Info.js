import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import { getQuestion } from '../../store/actions/questions'
import { setPage } from '../../store/actions/navigation'
import Question from './Question_poll.js'
import './Info.css'

class Info extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    this.props.setPage('')
    const { question_id } = this.props.match.params
    // this.props.location.pathname
    // this.props.getQuestion(question_id)

    const errorChecking = async () => {
      await this.props.getQuestion(question_id)
      await checkQuestion()
    }
    const checkQuestion = () => {
      if(_.isEmpty(this.props.question)){
        this.setState({redirect: true})
      }
    }
    errorChecking()
  }


  render() {
    if(this.state.redirect) {
      return (
        <Redirect to={{
          pathname: '/login',
          state: {
            fromError: true
          }
        }}/>
      )
    }

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
    setPage: (page) => dispatch(setPage(page)),
    getQuestion: (id) => dispatch(getQuestion(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
