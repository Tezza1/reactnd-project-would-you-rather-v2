import React from 'react'

const Error = () => {
    return (
      <div className="ui container center aligned card-container">
        <h2>Error</h2>
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <img className="mini ui image" src={'https://semantic-ui.com/images/avatar2/small/lena.png'} alt='Angry woman' />
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

export default Error

