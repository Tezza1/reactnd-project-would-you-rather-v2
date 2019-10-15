import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Login.css'

class Login extends Component {
  render () {
    return (
      <div className="form-container container">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui image header">
              <div className="content">
                Log-in to your account
              </div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="text" name="name" placeholder="Name"/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input type="password" name="password" placeholder="Password" />
                  </div>
                </div>
                <div className="ui fluid large black submit button">Login</div>
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
      // ctr: state.ctr.counter,
      // storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onIncrementCounter: () => dispatch(actionCreators.increment()),
        // onDecrementCounter: () => dispatch(actionCreators.decrement()),
        // onAddCounter: () => dispatch(actionCreators.add(10)),
        // onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        // onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        // onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login)
