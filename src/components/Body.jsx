import React from 'react'
import './style.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createClient } from 'pexels';

const client= createClient('RVmM2HHzYaGJZQl867MKhDLmY4IYFlek3gc17BxbJAN8FOKNJtLb4gHE')
const query = 'Nature';
const Body = () => {
  const [photos, setPhotos] = useState([]);
    const[state, setState] = useState([]);
    const[res, setRes] = useState([]);

    useEffect(() => {
      client.photos.search({ query, per_page: 100 }) // Request up to 100 photos
        .then(photosData => {
          if (photosData && photosData.photos && photosData.photos.length > 0) {
            const photoArray = photosData.photos.slice(0, 100).map(photo => ({ // Limit to the first 100 photos
              url: photo.src.original,
              alt: photo.alt,
            }));
            setPhotos(photoArray);
          }
        });
    }, []);

const navigate = useNavigate();
function view(image,title,subtitle){
  navigate('/ViewPin',{state:{id:1,ima:image,tit:title,sub:subtitle}})

}

//  onClick={()=>view(url, url.alt, url.photographer)} key={url.id}
  return (
    <>
    <div className='wall'>
      {photos.map((photo, index) => (
        <div className='card'  onClick={()=>view(photo.url, photo.alt, photo.photographer)}key={index}>
          <img src={photo.url} alt={photo.alt} />
          <p className='maintext'>{photo.alt}</p>
          <span className='home-buttons'><button className='viewbtn'>Add to Collections</button>
          <button className='viewbtn'>View</button></span>
          
        </div>
      ))}
    </div>
  </>
  )
}


export default Body