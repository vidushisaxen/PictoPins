import React from 'react'
import { Link } from 'react-router-dom'
function PrivacyPolicy() {
  return (
   <>
   <div className="policy">
   <div className='left'>
      <ul>
      <Link to='/Signedin' className='link'><li> Signed in</li></Link>

      <Link to='/EditProfile' className='link'> <li> Settings </li></Link>

      <Link to='/Windows' className='link'> <li> Install the Windows App</li></Link>

      <Link to='/Privacy' className='link'><li> Your privacy rights</li></Link>
 
      <Link to='/Help' className='link'><li>Get Help</li></Link>

      <Link to='/Service' className='link'><li> See terms of service</li></Link>
 
      <Link to='/PrivacyPolicy' className='link'><li>See privacy policy</li></Link>
 
      <Link to='/Tester' className='link'><li> Be a Beta Tester</li></Link>

      <Link to='/Logout' className='link'><li> Logout</li></Link>
      </ul>

    </div>
    <div className="right">
        <h2>Privacy Policy</h2>
        <p>To visit Privacy Policy visit the page below.</p>
        <a href='https://policy.pinterest.com/en/privacy-policy' target='_main'><button>View</button></a>
        
    </div>
   </div>
   </>
  )
}

export default PrivacyPolicy