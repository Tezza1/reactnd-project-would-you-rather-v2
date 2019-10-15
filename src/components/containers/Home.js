import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import './Home.css'
import Question from './Question'
import QuestionDone from './Question_done'

class Home extends Component {

  render() {
  const { questions } = this.props
  let arr = _.values(questions)
  console.log(questions)
  console.log(arr)

    if(arr.length < 2) {
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
        {arr.map(item => (
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
         {arr.map(item => (
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
    questions: state.questions.questions
  }
}

export default connect(mapStateToProps)(Home)
