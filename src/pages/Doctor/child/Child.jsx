import React from 'react'
import NavbarD from '../../../component/NavbarDoc/NavbarDoc'
import CardChildDoc from '../../../component/cardChildDoc/CardChildDoc'
import SearchIcon from '@mui/icons-material/Search';
import {InputBase, IconButton } from '@mui/material';
import './Child.css'
import SearchBar from '../../../component/Searchbar/SearchBar';
const Child = () => {
  return (
    <div>
        <div>
            <NavbarD/>
        </div>

        <div className='childHeader'>
        <div style={{ marginTop: '100px' }}>
                <SearchBar/>
      </div>
        <div>
            
            <CardChildDoc/>
            <CardChildDoc/>
            <CardChildDoc/>
            <CardChildDoc/>
        </div>
        </div>
    </div>
  )
}

export default Child