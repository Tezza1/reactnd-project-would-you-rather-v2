import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPage } from '../../store/actions/navigation'
import { upDateUserQuestion  } from '../../store/actions/user'
import { clearNewQ } from '../../store/actions/questions.js'
import _ from 'lodash'
import uuid from "uuid"
import './Home.css'
import Question from './Question'

class Home extends Component {
  state = { showContainer: 'unanswered' }

  componentDidMount(){
    this.props.setPage('home')
  }

  handleClick = status => {
    this.setState({ showContainer: status })
  }

  render() {

    let { users } = this.props
    let { user } = this.props
    let { questions } = this.props

    if(!questions.length || user === '') {
      return(
        <div className="ui container center aligned card-container">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      )
    }

    questions = _.orderBy(questions, ['timestamp'], ['desc'])
    let keysQ = _.map(questions, 'id')  // keysQ.map(q => q.id)
    let userData = _.find(users, {id: user})
    let answeredQs = _.keys(userData.answers)
    let unansweredQs = _.difference(keysQ, answeredQs)

    const { newQ } = this.props
    if(newQ !== ''){
      this.props.updateU(this.props.user, newQ)
      this.props.clearNew()
    }

  return(
    <div>
      <div className="ui container center aligned button-container">
        <div className="ui animated button" tabIndex="0" onClick={() => this.handleClick("unanswered")}>
          <div className="visible content">Unanswered Questions</div>
          <div className="hidden content">
            <i className="right arrow icon"></i>
          </div>
        </div>
        <div className="ui animated button" tabIndex="0" onClick={() => this.handleClick("answered")}>
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
              {unansweredQs.map(idNum => <Question item={_.find(questions, {id: idNum})} key={uuid.v4()} answer={true} /> )}
            </div>
          </div>
        ) : (
          <div className="ui container center aligned card-container">
            <h2>Answered questions</h2>
            <div className="ui cards">
              {answeredQs.map(idNum => <Question item={_.find(questions, {id: idNum})} key={uuid.v4()} answer={false} /> )}
            </div>
          </div>
        )}
    </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.loggedInUser,
    users: state.user.users,
    questions: state.questions.questions,
    newQ: state.questions.newQ
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPage: (page) => dispatch(setPage(page)),
    updateU: (uid, qs) => dispatch(upDateUserQuestion(uid, qs)),
    clearNew: () => dispatch(clearNewQ())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
