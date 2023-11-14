import React from 'react'
import { Link } from 'react-router-dom'

const Branded = () => {
  return (
    <div className='branded'>
       <div className='left'>
        <ul>
           <Link to='/EditProfile' className='link'> <li> Edit Profile </li></Link>

           <Link to='/Account' className='link'> <li> Account Management</li></Link>

            <Link to='/Visibility' className='link'><li> Profile Visibility</li></Link>
            
            <Link to='/TuneHome' className='link'><li>Tune your home feed </li></Link>
           
            <Link to='/Claimed' className='link'><li> Claimed accounts</li></Link>
            
            <Link to='/Social' className='link'><li>Social permissions</li></Link>
            
            <Link to='/Notify' className='link'><li> Notifications</li></Link>
            
            <Link to='Privacy' className='link'><li> Privacy and data</li></Link>
           
           <Link to='/Security' className='link'><li>Security</li></Link>
        
           <Link to='/Branded' className='link'><li>Branded Content</li></Link>
           

        </ul>
    </div>

    <div className='right'>
         <h2>Branded Content</h2>
         <p>Pinterest’s Branded Content program is a service that connects creators with brands for sponsorship opportunities.</p>
         <h3>Sign up for branded content</h3>
         <p>We’ll do our best to match you with brands, but signing up does not guarantee brand deals.</p>
         <button>Sign up</button>
    </div>

    </div>
  )
}

export default Branded