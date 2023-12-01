import React from 'react'
import { Link } from 'react-router-dom'
function Help() {
  return (
    <>
    <div className="help">
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
        <h2>Help</h2>
        <p>To get help regarding your pinterest account and any other terms and condition please visit the Help Centre.</p>
        <a href='https://help.pinterest.com/en?source=gear_menu_web' target='_main'><button>Help Centre</button></a>
        
    </div>
    </div>
    </>
  )
}

export default Help