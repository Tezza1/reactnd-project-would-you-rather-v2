import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const Question = (props) =>{
  const { item } = props
  return (
    <Link className="card" key={item.id} to={`/question/${item.id}`}>
      <div className="content">
        <div className="meta">
          <Moment format="DD MMMM YYYY">
            {item.timestamp}
          </Moment>
        </div>
        <div className="description">
          <i className="info circle icon"></i>
          <em>Click for more info.</em>
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons middle aligned">
          <div className="ui secondary button">{item.optionOne.text}</div>
          <div className="ui basic black button">{item.optionTwo.text}</div>
        </div>
      </div>
    </Link>
  )
}

export default Question;
