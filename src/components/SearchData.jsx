import React from 'react'
import { useEffect , useState} from 'react';
import { createClient } from 'pexels';
import SearchBar from './SearchBar';


const client= createClient('RVmM2HHzYaGJZQl867MKhDLmY4IYFlek3gc17BxbJAN8FOKNJtLb4gHE')
    const query = 'Nature';

const SearchData = () => {
   

      
return(
    <>
    <SearchBar data ={"abcd"}/>
    </>
)
}


export default SearchData