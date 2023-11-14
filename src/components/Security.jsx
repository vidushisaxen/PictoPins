import React from 'react'
import { Link } from 'react-router-dom'

const Security = () => {
  return (
    <div className='security'>
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
          <h2>Security</h2>
          <p>Include additional security like turning on two-factor authentication and checking your list of connected devices to keep your account, Pins and boards safe. <a href='https://help.pinterest.com/en/article/protect-your-account' target='main'> Learn more.</a></p>

          <h3>Two-factor Authentication</h3>
          <p>This makes your account extra secure. Along with your password, you'll need to enter the secret code that we text to your phone each time you log in.<a href='https://help.pinterest.com/en/article/two-factor-authentication' target='main'> Learn more</a></p>
          <input type='radio'></input><label>Require code at login</label>

          <h3>Login options</h3>
          <input type='radio'></input><label>Use your facebook account to login</label><br/>
          <input type='radio'></input><label>Use your google account to login</label>

          <h3>Apps Login</h3>
          <p>Keep track of everywhere you've logged in with your Pinterest profile and remove access from apps you're no longer using with Pinterest. <a href='https://help.pinterest.com/en/article/link-your-social-media?source=settings_page' target='main'>Learn more</a></p>
          <br/>
          <p>You have not approved anty apps.</p>

          
          <h3>Connected devices</h3>
          <p>This is a list of devices that have logged into your account. Revoke access to any device you don't recognize. <a href='https://help.pinterest.com/en/article/see-recent-logins' target='main'>Learn more</a></p>
          <button>Show sessions</button>
          <br></br>
          <br></br>
          <br></br>
          
        </div>
    </div>
  )
}

export default Security