import React from 'react'
import { useState , useEffect} from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.css';
import SearchData from './SearchData';
import { createClient } from 'pexels';


const client= createClient('RVmM2HHzYaGJZQl867MKhDLmY4IYFlek3gc17BxbJAN8FOKNJtLb4gHE')
    const query = 'Nature';

const SearchBar = () => {
    const[input,setInput] = useState("");
    const [photos, setPhotos] = useState([]);
    const[filterdata, setFilterdata] = useState([]);


    useEffect(() => {
        client.photos.search({ query, per_page: 200 }) 
          .then(photosData => {
            if (photosData && photosData.photos && photosData.photos.length > 0) {
              const photoArray = photosData.photos.slice(0, 200).map(photo => ({ 
                alt: photo.alt,

              }));
              setPhotos(photoArray);
             
            }
          });
      }, []);
    

  function onChange(value){
    const arr = photos.filter((data)=>{ 
        const words = data.alt.toUpperCase().split(' ');
        return words.includes(value.toUpperCase())
     })
     setFilterdata(arr);
     console.log(filterdata);
     
  }
    
  return (
   <>
   <div className='input-container'>
    <span className='search-input-icon'>
   <FaSearch className='search-icon'/>
   <input type='text' placeholder='Search ideas' className='input-bar'
   onChange={(event)=>onChange(event.target.value)}></input></span>
   {filterdata.map((data)=>{
    return(
        <>
        <div className='search-results'>
        <ul className='search-list'>
            <li>{data.alt}</li>
        </ul>
        </div>
        </>
    )
   })}
   


   </div>
   </>
  )
}

export default SearchBar