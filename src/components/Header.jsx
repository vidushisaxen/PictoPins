import React from 'react'
import './style.css';
import {PiNotificationBold} from 'react-icons/pi'
import {BiMessageDetail} from 'react-icons/bi'
import {MdOutlineSwitchAccount} from 'react-icons/md'
import {RiDropdownList} from 'react-icons/ri'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {PiMagnifyingGlassFill} from 'react-icons/pi'
import Explore from './Explore';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const[search,setSearch] =  useState("");

  const searchonChange = (event)=>{
   setSearch(event.target.value);
  }

  const onSearch =(keyword)=>{
  console.log('search ' , keyword);
  }
  return (

    <>
    <nav className='navbar'>
    
    <img src='https://media.istockphoto.com/id/1135090585/vector/letter-p-logo-icon-design.jpg?s=612x612&w=0&k=20&c=lzfzb__61ufKGy-mvrHDriaazQW9iMGj5HK52PQTH9Y=' className='logo'/>
    <Link to = '/Home' className='link'><h2>Home</h2></Link>
    <Link to = '/Explore' className='link'><h2>Explore</h2></Link>
    <Link to = '/Create' className='link'><h2>Create</h2></Link> 
    <input placeholder='Search ideas' type= " text" value={search} onChange={searchonChange}></input>
    <button className='searchbutton' onClick={()=>onSearch(search)}>Search</button>
    <Link to = '/Notification' className='link'><p className='icon'><PiNotificationBold size={27}/></p></Link>
    <Link to = '/Chats' className='link'><p className='icon'><BiMessageDetail size={27}/></p></Link>
    <Link to = '/Profile' className='link'><p className='icon'><MdOutlineSwitchAccount size={27}/></p></Link>
    <Link to = '/More' className='link'><p className='icon'><RiDropdownList size={27}/></p></Link>

    </nav>
    </>

  )
}

export default Header