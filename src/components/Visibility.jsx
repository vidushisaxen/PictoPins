import React from 'react'
import { Link } from 'react-router-dom'

const Visibility = () => {
  return (
    <>
    <div className='visibility'>
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
       <h2>Profile Visibility</h2>
       <p>Manage how your profile can be viewed on and off of Pinterest.</p>

       <h4>Private Profile</h4>
       <span>
       <p>When your profile is private only the people you approve can see your profile, Pins, boards, followers and following lists.</p>
       <input type='radio'></input>
       </span>
       <a href='https://help.pinterest.com/en/article/make-your-profile-private'>Learn more</a>

       <h4>Search privacy</h4>
       <span>
       <p>Hide your profile and boards from search engines (ex. Google).</p>
       <input type='radio'></input>
       </span>
       <a href='https://help.pinterest.com/en/article/update-your-search-privacy'>Learn more</a>
    </div>
    </div>
    </>
  )
}

export default Visibility