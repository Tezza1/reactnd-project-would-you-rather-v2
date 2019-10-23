import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { handleSaveAnswer } from '../../store/actions/questions'
import { upDateUserAnswer } from '../../store/actions/user'
import Moment from 'react-moment'

class Question extends Component {
  state = { answer: true }

  changeStatus = () => this.setState({ answer: false})

  render () {
    const { item } = this.props
    const { author } = this.props
    const { user } = this.props

    if(!this.props.status) {
      this.setState({ answer: false })
    }

    const saveQ = (answer) => {
      this.props.saveAnswer({
        authedUser: user,
        qid: item.id,
        answer: answer
      })
      this.props.upDateUsrAns(user, {[item.id]: answer})
    }

    // get poll data
    const { questions } = this.props
    const theQuestion = _.find(questions, {id: item.id})
    const data_1 = theQuestion.optionOne.votes.length
    const data_2 = theQuestion.optionTwo.votes.length
    let answer = ''

    if (_.some(theQuestion.optionOne.votes, i => i === user)) {
      answer = theQuestion.optionOne.text
    } else {
      answer = theQuestion.optionTwo.text
    }

    return (
      <div className="card" key={item.id}>
        <div className="content">
          <img className="right floated mini ui image" src={author.avatarURL}  alt="Avatar"/>
          <div className="header">
            {author.name}
          </div>
          <div className="meta">
            <Moment format="DD MMMM YYYY">
              {item.timestamp}
            </Moment>
          </div>
          <div className="description">
            Choose one of the following options
          </div>
        </div>
      {this.state.answer && this.props.qstatus ? (
        <div className="extra content">
          <div className="ui two buttons middle aligned" onClick={this.changeStatus}>
            <div
              className="ui secondary button"
              onClick={() => saveQ('optionOne')}>
              {item.optionOne.text}
            </div>
            <div
              className="ui basic black button"
              onClick={() => saveQ('optionTwo')}>
              {item.optionTwo.text}
            </div>
          </div>
        </div>
       ):(
         <div className="extra content">
          <div className="ui two buttons middle aligned">
            <div className="ui basic green button no-button">
              <i className="check icon"></i><br />
              {item.optionOne.text}<br />
              <strong>Votes: {data_1}</strong><br />
              <em>({Math.round(data_1 / (data_1 + data_2)  * 100)*100/100}%)</em>
            </div>
            <div className="ui basic red button no-button">
              <i className="close icon"></i><br />
              {item.optionTwo.text}<br />
              <strong>Votes: {data_2}</strong><br />
              <em>({Math.round(data_2 / (data_1 + data_2)  * 100)*100/100}%)</em>
            </div>
          </div>
          <div className="ui floating icon message">
            <i className="chart line icon"></i>
            <div className="content">
              <div className="header">
                Your vote:<br />
                {answer}
              </div>
            </div>
          </div>
          <Link className="ui animated button" tabIndex="0" to="/">
            <div className="visible content">Return to Home</div>
            <div className="hidden content">
              <i className="left arrow icon"></i>
            </div>
          </Link>
        </div>
      )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.loggedInUser,
    questions: state.questions.questions,
    qstatus: state.questions.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveAnswer: (answer) => dispatch(handleSaveAnswer(answer)),
    upDateUsrAns: (uid, ans) => dispatch(upDateUserAnswer(uid, ans))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
