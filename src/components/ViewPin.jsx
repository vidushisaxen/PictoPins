import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewPin = () => {
    const location = useLocation();
  return (
    <>
    <div className='viewpin'>
       <div className='left'>
        <img src={location.state.ima}></img>
       </div>
       <div className='right'>
         <h2>{location.state.tit}</h2>
         {/* <p>{location.state.sub}</p> */}
         <h2> Photographed by : {location.state.grapher}</h2>
         <p></p>
       </div>
    </div>
    </>
  )
}

export default ViewPin
