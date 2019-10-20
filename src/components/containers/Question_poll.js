import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../../store/actions/questions'
import Moment from 'react-moment'

class Question extends Component {
  state = { answer: true}

  componentDidMount() {
  }

  changeStatus = () => this.setState({ answer: false})

  render () {
    const { item } = this.props
    const { author } = this.props

    if(!this.props.status) {
      this.setState({ answer: false })
    }

    const saveQ = (answer) => {
      this.props.saveAnswer({
        authedUser: this.props.user,
        qid: item.id,
        answer: answer
      })
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
      {this.state.answer ? (
        <div className="extra content">
          <div className="ui two buttons middle aligned" onClick={this.changeStatus}>
            <div className="ui secondary button" onClick={() => saveQ('optionOne')}>{item.optionOne.text}</div>
            <div className="ui basic black button" onClick={() => saveQ('optionTwo')}>{item.optionTwo.text}</div>
          </div>
        </div>
       ):(
         <div className="extra content">
          <div className="ui two buttons middle aligned">
            <div className="ui basic green button no-button">
              {item.optionOne.text}
              <br />
              <i className="check icon"></i> {item.optionOne.votes.length}
            </div>
            <div className="ui basic red button no-button">
              {item.optionTwo.text}
              <br />
              <i className="close icon"></i> {item.optionOne.votes.length}
            </div>
          </div>
        </div>
      )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.loggedInUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveAnswer: (answer) => dispatch(handleSaveAnswer(answer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
