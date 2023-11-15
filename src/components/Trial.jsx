// import React from 'react'
// import axios from 'axios'

// import { useState,useEffect } from 'react'
// import { createClient } from 'pexels';

// const client = createClient('RVmM2HHzYaGJZQl867MKhDLmY4IYFlek3gc17BxbJAN8FOKNJtLb4gHE');

// const query = 'Nature';


// // client.photos.search({ query, per_page: 1 }).then(photos => {...});

// const Trial = () => {
//     const [state, setState] = React.useState([]);
//     const[alttext,setAlttext]= React.useState("");
   
//   client.photos.search({ query, per_page: 15})
//    .then(photos => {
//     if(photos && photos.photos && photos.photos.length >0){
//       const  firstphoto = photos.photos;
     
//       firstphoto.forEach((url)=>{
//         const photoUrl = url.src.original;
//         const text = url.alt;
//         setState(state=>[...state, photoUrl]);
//         setAlttext(alttext=>[...alttext,text]);
//         // console.log(photos[0].src.original);
//       });
//     }

//    });
       
//   return (
//    <>
//    <div className='wall'>
//     {
//       state.map((url)=>{
//         return(
//           <div className='card'>
//           <img src={url}/>
//           <p className='maintext'>{url.alt}</p>
//           <button className='viewbtn'>View</button>
//           </div>
//         )
//       })
//     }

//    </div>
//    </>
//   )
// }

// export default Trial




import React, { useState, useEffect } from 'react';
import { createClient } from 'pexels';

const client = createClient('RVmM2HHzYaGJZQl867MKhDLmY4IYFlek3gc17BxbJAN8FOKNJtLb4gHE');
const query = 'Nature';

const Trial = () => {
  const [photos, setPhotos] = useState([]);

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

  return (
    <>
      <div className='wall'>
        {photos.map((photo, index) => (
          <div className='card' key={index}>
            <img src={photo.url} alt={photo.alt} />
            <p className='maintext'>{photo.alt}</p>
            <button className='viewbtn'>View</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Trial;
