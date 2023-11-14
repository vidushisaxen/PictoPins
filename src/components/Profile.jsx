import React from 'react'
import './style.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Profile = () => {
  const[state,setState] = useState([]);
  const[text,setText] = useState([]);
  
  async function apidata(term){
    const response = await axios.get('https://api.unsplash.com/search/photos?page=7&query=office&client_id=ESxiRs2G80y-5ftc727ykRehZI21AanPPhVGEpC8tsM')

    console.log(response.data.results)
    setState(response.data.results);
    setText(response.data.description);
  }
  useEffect(() => {
    apidata();
  }, [])


  return (
    <>
    <div className='profile'>
   <img src='https://img.freepik.com/premium-photo/image-human-head-with-books-gears-generative-ai_97167-1836.jpg'></img>
   <h2>VIDUSHI SAXENA </h2>
   <p>@Username . she/her</p>
   <p>0 followers || 0 following</p>
  
   <span className='profilebtn'>
    <Link to='/Share'><button>Share</button></Link>
    <Link to='/EditProfile'><button>Edit Profile</button></Link>
   </span>
   <h3>Your boards</h3> 
   <div className='profilebody'>
    
     {state.map((data)=>{return(
      <>
      
      <div style={{backgroundImage:`url(${data.urls.regular})`}}>
      <p>{data.alt_description}</p>
      </div>
     
      
      </>
     )

     })}
   </div>
   
   </div> 
    </>
  )

    }
export default Profile