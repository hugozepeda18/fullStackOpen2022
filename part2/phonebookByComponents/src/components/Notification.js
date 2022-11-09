import React from 'react'

import { errorStyle, successStyle } from './Notification.style'

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    if (message.includes('ERROR')){
      return (
        <div style={errorStyle} className="error">
          {message}
        </div>
      )
    } else {
      return (
        <div style={successStyle} className="error">
          {message}
        </div>
      )
    }
  }

export default Notification