import React from 'react'
import Moment from 'react-moment'

const Question = (props) =>{
  const { item } = props
  return (
    <div className="card" key={item.id}>
      <div className="content">
        {/* <img className="right floated mini ui image" src={item.avatarURL}  alt="Avatar"/> */}
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
          <div className="ui secondary button">{item.optionOne.text}</div>
          <div className="ui basic black button">{item.optionTwo.text}</div>
        </div>
      </div>
    </div>
  )
}

export default Question;
