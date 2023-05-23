
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted:false,
  }
  onBlurLastName = () =>{
      const isValidLastName = this.validateLastName()
      this.setState({showLastNameError:!isValidLastName})
  }

  onChangeLastName = event =>{
      const {target} = event
      const {value} = target

      this.setState({
          lastNameInput: value,
      })
  }
 
  renderLastNameField = () => {
      const {lastNameInput, showLastNameError} = this.state
      const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

      return (
          <div className="input-container">
              <label className="input-label" htmlFor="lastName">
                  LAST NAME
              </label>
              <input
                  type="text"
                  id="lastName"
                  className={className}
                  value={lastNameInput}
                  placeholder="last-name"
                  onChange={this.onChangeLastName}
                  onBlur={this.onBlurLastName}
              />
          </div>
      )
  }

  onBlurFirstName = event => {
      const isValidFirstName = this.validateFirstName()

      this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
      const {target} = event
      const {value} = target

      this.setState({
          firstNameInput:value
      })
  }

  renderFirstNameField = () => {
      const {firstNameInput,showFirstNameError} = this.state
      const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'
  }
  render() {
    
    return (
      <div className="login-form-container">
 
      </div>
    )
  }
}

export default LoginForm
