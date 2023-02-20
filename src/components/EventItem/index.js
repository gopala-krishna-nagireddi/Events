// Write your code here

import './index.css'

const EventItem = props => {
  const {eventItem, onSelectEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventItem

  const onClickEvent = () => {
    onSelectEvent(registrationStatus)
  }

  return (
    <li className="event-item-container">
      <button className="list-button" type="button" onClick={onClickEvent}>
        <img className="event-image" src={imageUrl} alt="event" />
        <p>{name}</p>
        <p>{location}</p>
      </button>
    </li>
  )
}

export default EventItem
