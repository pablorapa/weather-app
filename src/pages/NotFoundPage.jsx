import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
        Not Found
        <Link to='/main'>Volver a Main</Link>
    </div>
  )
}

export default NotFoundPage