import React from 'react'

function Error({ setIsIpAddress}) {
  return (
    <div className='overlay'>
       <div className='my-modal flex flex-col'>
       <h2 className='text-2xl my-4  text-center ' style={{
        color: 'red'
       }}>
         Ooops! Not an IP Address 😢
         <button onClick={() => setIsIpAddress(true)} style={{
            backgroundColor: '#4ade80'
         }} className=' text-white text-sm p-2 my-4 rounded-md '>Try Again</button>
       </h2>
       </div>
      
    </div>
  )
}

export default Error