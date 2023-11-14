import React from 'react'
import './style.css'
import { useState, useEffect } from 'react';
import axios from 'axios'


const Explore = () => {
  const[date,setDate] = useState(0);
  const[state,setState] = useState([]);
  const[text,setText] = useState([]);

  function getdate(){
    const currdate = new Date();
    const day = currdate.getDate();
    var mon = currdate.getMonth();
    const arr = ["January", " February", "March", "April", "May" , "June" ,"July" , "August" ,"September","October","November","December"];
    const year = currdate.getFullYear();
    setDate(arr[mon]+" "+day+", "+year); 
  }

  useEffect(() => {
    getdate();
  }, []);


  async function apidata(term){
    const response = await axios.get('https://api.unsplash.com/search/photos?page=3&query=office&client_id=ESxiRs2G80y-5ftc727ykRehZI21AanPPhVGEpC8tsM')

    console.log(response.data.results)
    setState(response.data.results);
    setText(response.data.description);
  }
  useEffect(() => {
    apidata();
  }, [])

  
  return (
    <>
    <h2 className='date'>{date}</h2>
    <h2 className='title'>Stay Fashionable.</h2>
    <div className='wall'>
     {state.map((data)=>{return(
      <>
      <div className='expcard' style={{backgroundImage:`url(${data.urls.regular})`}}>
      <p className='imgtext'>{data.alt_description}</p>
      </div>
      </>
     )

     })}
    </div>
    </>
    
  )
}

export default Explore