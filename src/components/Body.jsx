import React from 'react'
import './style.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createClient } from 'pexels';


const client= createClient('RVmM2HHzYaGJZQl867MKhDLmY4IYFlek3gc17BxbJAN8FOKNJtLb4gHE')
const query = 'Nature';

const Body = () => {
  const [photos, setPhotos] = useState([]);
    const[data, setData] = useState([]);


    useEffect(() => {
      client.photos.search({ query, per_page: 200 }) 
        .then(photosData => {
          if (photosData && photosData.photos && photosData.photos.length > 0) {
            const photoArray = photosData.photos.slice(0, 200).map(photo => ({ 
              url: photo.src.original,
              alt: photo.alt,
              photographer:photo.photographer,
              photographer_url: photo.photographer_url
            }));

            setPhotos(photoArray);
            console.log(photosData);
          }
        });
    }, []);


const navigate = useNavigate();
function view(image,title,names,url){
  navigate('/ViewPin',{state:{id:1,ima:image,grapher:names,tit:title, links:url}})
}

function addtocollections(){   
}
  return (
    <>
    <div className='wall'>
      {photos.map((photo, index) => (
        <div className='card'  onClick={()=>view(photo.url, photo.alt, photo.photographer, photo.photographer_url
          )}key={index}>
          <img src={photo.url} alt={photo.alt} />
          <p className='maintext'>{photo.alt}</p>
          <span className='home-buttons'><button className='viewbtn' onClick={addtocollections()}>Add to Collections</button>
          <button className='viewbtn'>View</button></span>
          
        </div>
      ))}
    </div>
  </>
  )
}


export default Body