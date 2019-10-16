import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import './Home.css'
import Question from './Question'
import QuestionDone from './Question_done'

class Home extends Component {

  render() {
    if(!this.props.status) {
      return (
        <div>
          <Redirect to='/login' />
        </div>
      )
    }

    const { questions } = this.props

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
      <div className="ui container center aligned card-container">
       <h2>
          Unanswered questions
        </h2>
        <div className="ui cards">
          {questions.map(item => (
           <Question item={item} />
         ))}
         </div>
       </div>
       <br />
       <div className="ui container center aligned card-container">
         <h2>
           Answered questions
         </h2>
         <div className="ui cards">
         {questions.map(item => (
           <QuestionDone item ={item} />
         ))}
         </div>
      </div>
  </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.users,
    questions: state.questions.questions,
    status: state.user.loggedInState
  }
}

export default connect(mapStateToProps)(Home)
