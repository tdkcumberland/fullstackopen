import React from 'react'

const Notfication = ({message}) =>{
    if (message === null) {
        return null
      }
    
      return (
        <div className="error">
          {message}
        </div>
      )
}

export default Notfication