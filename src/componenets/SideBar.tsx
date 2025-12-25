import React from 'react'
import Button from './Button'

const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <div>
        <h1>Revue</h1>
      </div>
      <div>
        <Button  text='Scan'/>
      </div>
    </div>
  )
}

export default SideBar