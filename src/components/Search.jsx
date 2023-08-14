import React from 'react'
import Arrow from '../images/icon-arrow.svg'
export default function Search({ipValue , setIpValue, handleSubmit }) {
    
  return (
    <div className=' m-4 flex flex-row  text-xl' >
      <form onSubmit={handleSubmit} className='flex   flex-row justify-between bg-white ' style={{
        height: '43px',
        width: '400px',
        
        borderRadius: '10px'
    }}>
      <div>
       <input type="text" style={{
        fontSize: '14px'
       }} className='outline-none  bg-transparent w-full p-2' placeholder='Search for any IP address or domain' value={ipValue} onChange={(e) => setIpValue(e.target.value)}/>
      </div>
       <button className='bg-black text-white p-2 btn  ' style={{
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
       }}>
         <img src={Arrow} alt="" className='w-3 h-3 mx-2'/>
      </button>
      </form>
    </div>
  )
}
