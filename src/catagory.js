import React from 'react'

export default function Catagory({filteritem}) {
  return (
    <div className='btn-container'>
        <button className='filter-btn' onClick={()=>{filteritem('all')}}>All</button>
        <button className='filter-btn' onClick={()=>{filteritem('breakfast')}}>breakfast</button>
        <button className='filter-btn' onClick={()=>{filteritem('lunch')}}>lunch</button>
        <button className='filter-btn' onClick={()=>{filteritem('shakes')}}>shakes</button>


    </div>
  )
}
