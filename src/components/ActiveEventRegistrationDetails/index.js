// Write your code here
import {Component} from 'react'

import './index.css'

class ActiveEventRegistrationDetails extends Component {
  onNoActiveEvent = () => (
    <p className="no-event">
      Click on an event, to view its registration details
    </p>
  )

  onYetToRegister = () => (
    <div className="regisration-result-container">
      <img
        className="registration-status-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="text">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  onRegistered = () => (
    <div className="regisration-result-container">
      <img
        className="registered-status-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  onRegistrationsClosed = () => (
    <div className="regisration-result-container">
      <img
        className="registered-status-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registered-text">Registrations Are Closed Now!</h1>
      <p>Stay tuned. we will reopen the registrations soon</p>
    </div>
  )

  render() {
    const {registrationStatus} = this.props
    switch (registrationStatus) {
      case 'NO_ACTIVE':
        return this.onNoActiveEvent()
      case 'YET_TO_REGISTER':
        return this.onYetToRegister()
      case 'REGISTERED':
        return this.onRegistered()
      case 'REGISTRATIONS_CLOSED':
        return this.onRegistrationsClosed()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
