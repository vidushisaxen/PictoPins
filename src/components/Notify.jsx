import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Notify = () => {
  return (
   <>
   <div className='not'>
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

    <div className='right'>
      <h2>Notifications</h2>
      <p>We'll always let you know about important changes, but you pick what else you want to hear about. <a href='https://help.pinterest.com/en/article/edit-notification-settings'>Learn more</a></p>

      <h4>On Pinterest</h4>
      <p>Pick which notifications to see while in the app or on the site.
      <a href='https://help.pinterest.com/en/article/edit-notification-settings'>Learn more</a></p>
      <button>Edit</button>

      <h4>By Email</h4>
      <p>Pick which notifications to get by email.
        <a href='https://help.pinterest.com/en/article/edit-notification-settings'>Learn more</a></p>
        <button>Edit</button>

        <h4>By push notifications</h4>
       <p> Pick which notifications to get on your phone or computer.
        <a href='https://help.pinterest.com/en/article/edit-notification-settings'>Learn nore</a></p>
        <button>Edit</button>
        <br></br>
        <br></br>
        <br></br>
    </div>
   </div>
   </>
  )
}

export default Notify