
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





/* Write your CSS code here */
.registration-form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
@media screen and (max-width: 767px) {
  .registration-form-container {
    flex-direction: column;
    justify-content: start;
    padding-top: 50px;
  }
}
.form-title {
  font-size: 48px;
  color: #ea580c;
  font-weight: 500;
}
@media screen and (max-width: 767px) {
  .form-title {
    font-size: 36px;
  }
}
.view-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 350px;
  padding: 20px;
  border-radius: 16pxm;
  min-height: 310px;
}
@media screen and (max-width: 767px) {
  .view-container {
    max-width: 450px;
    flex-shrink: 0;
    box-shadow: 0px 4px 16px;
    padding: 48px 64px 48px 64px;
  }
}
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.input-continer {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
}
.input-label {
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
}
.name-input-feild {
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  border: 1px solid #cbd2d9;
  border-radius: 5px;
}
