import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
  return (
    <>
    <div className='social'>
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
      <h2>Social permissions</h2>
      <p>Choose how others can interact with you on Pinterest, as well as other permissions based on our latest features</p>

     <h3>@Mentions</h3>
     <p>Choose who can @mention you</p>
     <input type='radio'></input><label>Anyone on pinterest</label>
     <br></br>
     <br></br>

     <input type='radio'></input><label>Only people you follow</label>
     <br></br>
     <br></br>

     <input type='radio'></input><label>Turn off : No one can mention you</label>
     <br></br>
     <br></br>

     <h3>Messages</h3>
     <p>You decide whether messages go to your inbox, requests, or if you don’t receive them at all</p>


     <span>
      <h4>Friends</h4>
      <p>Inbox</p>
      <button className='smallbtn'>Edit</button>
     </span>
     <span>
      <h4>Followers</h4>
      <p>Requests</p>
      <button className='smallbtn'>Edit</button>
     </span>
     <span>
      <h4>Following</h4>
      <p>Requests</p>
      <button className='smallbtn'>Edit</button>
     </span>
     <span>
      <h4>Everyone else</h4>
      <p>Requests</p>
      <button className='smallbtn'>Edit</button>
     </span>
    

    <h3>Blocked accounts</h3>
    <p>Note: Accounts you've blocked on Pinterest can't message you. To unblock an account, go to their profile.</p>

    <h3>Comments</h3>
    <span>
      <h4>Filter comments on my pins: </h4>
      <br></br>
        <p>Hide comments from Pins you created that contain specific words or phases</p>
        <input type='radio'></input>
      
    </span>
    <span>
      <h4>Filter comments on other's pins: </h4>
      <br></br>
        <p>Hide comments from Pins you created that contain specific words or phases</p>
        <input type='radio'></input>
      
    </span>

<h3>Shopping recommendations</h3>
    <span>
      <h4>Show in standard pins: </h4>
      <br></br>
        <p>People can shop products similar to what’s shown in your standard Pins using visual search</p>
        <input type='radio'></input>
      
    </span>
    <span>
      <h4>Show in Idea pins: </h4>
      <br></br>
        <p>People can shop products similar to what’s shown in your Idea Pins using visual search Shopping</p>
       
        <input type='radio'></input>

      
    </span>
    <p>Shopping recommendations aren’t available for Idea ads and Idea Pins with product tags or paid partnership label</p>
    <h4> Autoplay videos</h4>
    <p>Autoplay videos on desktop. <a href='https://help.pinterest.com/en/article/video-on-pinterest'>Learn more.</a></p>
    {/* <input type='radio'></input> */}
    </div>
    </div>
    </>
  )
}

export default Social