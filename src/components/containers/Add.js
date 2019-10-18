import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../../store/actions/questions'
import './Add.css'

class Add extends Component {
  state = {
    option1: '',
    option2: '',
    redirect: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  buttonClickHandler = e => {
    e.preventDefault()
    if (this.state.option1 === '' || this.state.option2 === ''){
      alert('Fill in 2 options')
    } else {
      this.props.saveQ({
        author: this.props.user,
        optionOneText: this.state.option1,
        optionTwoText: this.state.option2
      })
      this.setState({
        redirect: true
      })
    }
  }

  render() {

    if(!this.props.status) {
      return <Redirect to='/login' />
    }

    if(this.state.redirect){
      return <Redirect to="/" />
    }

    return (
      <div className="form-container container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui image header">
              <div className="content">
                Add a question
              </div>
            </h2>
            <form className="ui form">
              <div className="ui stacked segment left aligned">
                <div className="grouped fields">
                  <label>Option 1</label>
                  <div className="field">
                    <input
                      type="text"
                      name="option1"
                      value={this.state.option1}
                      onChange={e => this.handleChange(e)}
                      placeholder="Enter Option 1"
                    />
                  </div>
                </div>
                <div className="grouped fields">
                  <label>Option 2</label>
                  <div className="field">
                    <input
                      type="text"
                      name="option2"
                      value={this.state.option2}
                      onChange={e => this.handleChange(e)}
                      placeholder="Enter Option 2"
                    />
                  </div>
                </div>
                <button className="ui fluid large black button" onClick={e => this.buttonClickHandler(e)}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.loggedInUser,
    status: state.user.loggedInState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveQ: (ques) => dispatch(handleAddQuestion(ques))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
