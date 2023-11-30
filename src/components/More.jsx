import React from 'react'
import { Link } from 'react-router-dom'

const More = () => {
  return (
    <>
    <div className='more'>
    {/* <h2>Yeh dil maange moree...</h2> */}
    <div className='left'>
      <ul>
      <Link to='/Signedin' className='link'><li> Signed in</li></Link>

      <Link to='/EditProfile' className='link'> <li> Settings </li></Link>

      <Link to='/Account' className='link'> <li> Install the Windows App</li></Link>

      <Link to='/Visibility' className='link'><li> Your privacy rights</li></Link>
 
      <Link to='/TuneHome' className='link'><li>Get Help</li></Link>

      <Link to='/Claimed' className='link'><li> See terms of service</li></Link>
 
      <Link to='/Social' className='link'><li>See privacy policy</li></Link>
 
      <Link to='/Notify' className='link'><li> Be a Beta Tester</li></Link>

      <Link to='/Notify' className='link'><li> Logout</li></Link>
      </ul>

    </div>
    </div>

    
    </>
  )
}

export default More