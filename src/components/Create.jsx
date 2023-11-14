import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <>
    <div className='create'>
      <img src='https://wallpapers.com/images/hd/blue-collage-from-pinterest-laptop-cswu67ixu2wo4jw7.jpg' className='collage'></img>
      <img src='https://i.pinimg.com/736x/36/09/2f/36092f8c1d53ec473d62f8fa08b02d10.jpg'className='collage'></img>
      <img src='https://i.pinimg.com/736x/18/79/13/187913a709574ab380fe4c1b9d92d112.jpg'className='collage'></img>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TzrbqVGyBAHbO5NKoEkDQAD4UOHTKqgULw&usqp=CAU'className='collage'></img>
    
  
      <h2>Start Creating Pins</h2>
      <p>The saved drafts if not posted will get deleted within 30 days.</p>
      <Link to='/Trial'><button>Create</button></Link>
     

    
    </div>
    </>
    
  )
}

export default Create