import React from 'react'
import Arrow from '../images/icon-arrow.svg'
export default function Search() {
  return (
    <div className='bg-white p-3 m-2 flex flex-row text-xl'>
      <input type="text" placeholder='Search for any IP address or domain'/>
      <div className='bg-black text-white'>
        <img src={Arrow} alt="" />
      </div>
    </div>
  )
}
