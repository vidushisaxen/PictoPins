import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const EditProfile = () => {
  return (
   <div className='edit'>
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
        <h2>Edit Profile</h2>
        <p>Keep your personal details private.Information you add here is visible to any who can view your profile.</p>
        <span>
        <img src='https://media.istockphoto.com/id/463387769/vector/letter-in-fire-illustration.jpg?s=612x612&w=0&k=20&c=UOQYZdd1-2xiaUFFtuT4NZaNZ3nd1RSY0YKZ6gFi9Ew='/>
        <button>Change</button>
        </span>


        <form>
            <label>Full Name</label>
            <br></br>
            <input placeholder='Enter full name' type='text'></input>
            <br></br>
            <label>About</label>
            <br></br>
            <input placeholder='Let me know something about you' type='text'></input>
            <br></br>
            <label>Pronouns</label>
            <br></br>
            <input placeholder='Choose pronouns' type='text'></input>
            <p>Choose up to 2 sets of pronouns to appear on your profile so others know how to refer to you. You can edit or remove these any time.</p>
            <br></br>
            <label>Website</label>
            <br></br>
            <input placeholder='Add a link to drive traffic to your website' type='text'></input>
            <br></br>
            <label>Username</label>
            <br></br>
            <input placeholder='Display your username' type='text'></input>
            <br></br>
           
        </form>
    </div>

   
   </div>
  )
}

export default EditProfile