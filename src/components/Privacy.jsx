import React from 'react'
import { Link } from 'react-router-dom'

const Privacy = () => {
  return (
    <div className='privacy'>
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
      <h2>Privacy and data</h2>
      <p>Manage the data Pinterest shares with advertisers and uses to improve the ads and recommendations we show you. <a href='https://help.pinterest.com/en/article/update-your-search-privacy' target='main'>Learn more.</a></p>

      <h3>Ads personalization</h3>
      <input type='radio'></input><label>Use info from sites you visit: Allow Pinterest to use data from sites you visit to improve ads on Pinterest. <a href='https://help.pinterest.com/en/article/personalization-and-data' target='main'>Learn more.</a></label>
      <br></br>
      <br></br>
      <input type='radio'></input><label>Use of partner info: Allow Pinterest to use information from our partners to improve ads you see on Pinterest. <a href='https://help.pinterest.com/en/article/personalization-and-data' target='main'>Learn more.</a></label>
      <br>
      </br>
      <br></br>

      <input type='radio'></input><label>Ads about Pinterest: Allow Pinterest to use your activity to improve the ads about Pinterest you’re shown on other sites or apps. <a href='https://help.pinterest.com/en/article/third-party-analytics-or-advertising-providers-pinterest-uses-or-allows' target='main'>Learn more.</a></label>
      <br>
      </br>
      <br></br>
      <input type='radio'></input><label>Activity for ads reporting: Allow Pinterest to share your activity for ads performance reporting. <a href='https://help.pinterest.com/en/article/ads-performance-reporting' target='main'>Learn more.</a></label>
      <br>
      </br>
      <br></br>

      <h3>Delete your data and account</h3>
      <p>Delete your data and account</p>
      <button>Delete</button>

      <h3>Request your data</h3>
      <p>You can request a copy of the info Pinterest collects about you. You'll receive an email from our third-party provider SendSafely to complete your request. <a href='https://help.pinterest.com/en/article/download-your-pinterest-data'>Learn more</a></p>
      <button>Start request</button>
      <br></br>
      <br></br>
      <br></br>
    </div>
    </div>
  )
}

export default Privacy