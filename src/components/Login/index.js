import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    userIdInput: '',
    userPinInput: '',
    showErrMsg: false,
    errorMsg: '',
  }

  onChangeUserId = event => {
    this.setState({userIdInput: event.target.value})
  }

  // SUCCESS LOGIN>>>>>>>>>>>
  successLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    // const token = Cookies.get('jwt_token')

    const {history} = this.props
    history.replace('/')
  }

  // FAIL LOGIN>>>>>>>>>>>
  failureLogin = errorMsg => {
    this.setState({showErrMsg: true, errorMsg})
  }

  onChangeUserPin = event => {
    this.setState({userPinInput: event.target.value})
  }

  // FORM SUBMIT >>>>>>>>>>>>>>>>>>>>>>>>>>
  onSubmitLoginForm = async event => {
    event.preventDefault()

    const {userIdInput, userPinInput} = this.state

    const userDetails = {
      user_id: userIdInput,
      pin: userPinInput,
    }
    const loginUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.successLogin(data.jwt_token)
    } else {
      this.failureLogin(data.error_msg)
    }
  }

  render() {
    const {userIdInput, userPinInput, showErrMsg, errorMsg} = this.state
    console.log(showErrMsg, errorMsg)

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="bg-login-container">
        <div className="login-card-container">
          <div className="login-website-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
              className="website-login-image"
            />
          </div>

          <form
            className="login-form-container"
            onSubmit={this.onSubmitLoginForm}
          >
            <h1 className="login-heading">Welcome Back!</h1>
            <div className="user-id-input-div">
              <label htmlFor="userID" className="label-text">
                User ID
              </label>
              <input
                type="text"
                id="userID"
                className="user-id-input"
                placeholder="Enter user ID"
                value={userIdInput}
                onChange={this.onChangeUserId}
              />
            </div>
            <div className="user-id-input-div">
              <label htmlFor="Pin" className="label-text">
                PIN
              </label>
              <input
                type="password"
                id="Pin"
                className="user-id-input"
                placeholder="Enter PIN"
                value={userPinInput}
                onChange={this.onChangeUserPin}
              />
            </div>
            <button type="submit" className="login-submit-button">
              Login
            </button>
            {showErrMsg && <p className="error-msg-text">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
