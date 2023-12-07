import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
    <Link className='link' to="/">Dashboard</Link>
    </div>
  )
}

export default Sidebar
