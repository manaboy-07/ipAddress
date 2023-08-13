import React from 'react'
import Arrow from '../images/icon-arrow.svg'
export default function Search({ipValue , setIpValue, handleSubmit }) {
    
  return (
    <div className='bg-white p-3 m-2 flex flex-row text-xl'>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Search for any IP address or domain' value={ipValue} onChange={(e) => setIpValue(e.target.value)}/>
      <button className='bg-black text-white p-2 btn'>
        <img src={Arrow} alt="" className='w-6 h-6'/>
      </button>
      </form>
    </div>
  )
}
