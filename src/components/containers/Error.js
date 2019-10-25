import React, { Component } from 'react'

class Error extends Component {
  render(){
    return (
      <div className="ui container center aligned card-container">
        <h2>Error</h2>
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <img className="mini ui image" src={"http://clipart-library.com/data_images/362052.jpg"} alt="Angry man" />
              <div className="header">....ooops</div>
              <div className="ui warning message">
                <div className="header">The page you are looking for can't be found!</div>
              </div>
            </div>
          </div>
         </div>
      </div>
    )
  }
}

export default Error

