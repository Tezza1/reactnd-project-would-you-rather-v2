import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import _ from 'lodash'
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

    let { users } = this.props
    let { user } = this.props
    const { questions } = this.props

    let keysQ = _.map(questions, 'id')  // keysQ.map(q => q.id)
    let answeredQs = _.keys(users[user].answers)
    let unansweredQs = _.difference(keysQ, answeredQs)

    let ansQuesData = []
    let unansQuesData = []

    for (let i = 0; i < questions.length; i++) {
      for (let j = 0; j < answeredQs.length; j++){
        if(answeredQs[j] === questions[i].id){
          ansQuesData.push(questions[i])
        }
      }
    }

    for (let i = 0; i < questions.length; i++) {
      for (let j = 0; j < unansweredQs.length; j++){
        if(unansweredQs[j] === questions[i].id){
          unansQuesData.push(questions[i])
        }
      }
    }
    // questions.map( m => {
    //   answeredQs.filter(f => {
    //     if(f === m.id) {
    //       console.log(m)
    //     }
    //   })
    // })

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
          {ansQuesData.map(item => (
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
            {unansQuesData.map(item => (
               <QuestionDone item={item} />
             ))}
           {/* {answeredQs.map(item => <QuestionDone item={getFilteredData(item)} />)} */}
         </div>
      </div>
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
