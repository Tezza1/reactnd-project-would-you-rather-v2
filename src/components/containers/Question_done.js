import React from 'react'
import Moment from 'react-moment'

const QuestionDone = (props) => {
  const { item } = props
  return (
    <div className="card" key={item.id}>
      <div className="content">
        {/*<img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" />*/}
        <div className="header">
          {item.author}
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
    </div>
  )
}

export default QuestionDone;
