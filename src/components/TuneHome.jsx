import React from 'react'
import { Link } from 'react-router-dom'

const TuneHome = () => {
  return (
    <>
    <div className='tune'>
    <div className='left'>
        <ul>
           <Link to='/EditProfile' className='link'> <li> Edit Profile </li></Link>

           <Link to='/Account' className='link'> <li> Account Management</li></Link>

            <Link to='/Visibility' className='link'><li> Profile Visibility</li></Link>
            
            <Link to='/TuneHome' className='link'><li>Tune your home feed </li></Link>
           
            <Link to='/Claimed' className='link'><li> Claimed accounts</li></Link>
            
            <Link to='/Social' className='link'><li>Social permissions</li></Link>
            
            <Link to='/Notify' className='link'><li> Notifications</li></Link>
            
            <Link to='/Privacy' className='link'><li> Privacy and data</li></Link>
           
           <Link to='/Security' className='link'><li>Security</li></Link>
        
           <Link to='/Branded' className='link'><li>Branded Content</li></Link>
           

        </ul>
    </div>
    <div className="right">
      <h2>Tune your home feed</h2>
      <p>Make your Pinterest more you. Edit the details Pinterest uses to recommend ideas to you. These details won’t be shown publicly.</p>
      
    </div>
    </div>
    </>
  )
}

export default TuneHome