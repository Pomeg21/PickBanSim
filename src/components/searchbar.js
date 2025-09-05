import React from 'react'
import './searchbar.css';
import { championList } from '../Data';
import { useState } from 'react';

function SearchBar(props) {
    return (
    <div>
        <div className='champion-grid'>
            {championList.map((championList) => (
                <button key={championList.name}>{championList.portrait}</button>
            ))}
        </div>

        <div className='select-button'>
            <button style={{border: 0, borderRadius:10, fontSize:25, marginLeft:345, paddingTop:11, paddingBottom:11, paddingLeft:30, paddingRight:30, backgroundColor:'purple'}}>Select</button>
        </div>
    </div>
    )
}

export default SearchBar
