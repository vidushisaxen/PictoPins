import React from 'react'
import {FaGlobe} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Claimed = () => {
  return (
   <>
   <div className='claimed'>
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

    <h2>Claimed accounts</h2>
    <p>When you claim an account, you can monitor analytics and ensure your name or brand name appears on every Pin created from your sites. <a href='https://help.pinterest.com/en/business/article/claim-your-website'>Learn more.</a></p>
   
     <span> <p><FaGlobe/></p>
      <h3>Websites</h3> </span>   
    <button>Claim</button>
   
    </div>

   </div>
   </>
  )
}

export default Claimed