import React from 'react'

const Notfication = ({message, status}) =>{
    if (message === null) {
        return null
      }

    let errorCSS = {
      color: 'red',
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    }
    
    if (status === 'error'){
      errorCSS.color = 'red'
      // console.log(errorCSS)
    } else if (status === 'success'){
      errorCSS.color = 'green'
      // console.log(errorCSS)
    }
    
    
      return (
        <div style={errorCSS}>
          {message}
        </div>
      )
}

export default Notfication