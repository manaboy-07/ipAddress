/** @format */

import React from "react";

function Results({results}) {
//   console.log(`This is result page ${results}`)
  const {ip, isp, location:{timezone, country, region}} = results

  return (
    <div className='shadow-black rounded-md bg-white p-4 m-2 ' style={{
        border: '0.4px solid  hsl(0, 0%, 59%)',
        boxShadow: '10px 10px 5px -3px rgba(0,0,0,0.63)',
       
    }}>
      
      <ul className='list-none result-lists flex justify-between items-start mx-3'>

        <li className="flex flex-col m-3 px-6">
          <p className="dark-gray text-xl uppercase">IP address</p>
          <p className="text-black font-bold text-2xl">{ip}</p>
        </li>

        <li className="flex flex-col m-3 px-6">
          <p className="dark-gray text-xl uppercase">Locations</p>
          <span className="text-black font-bold text-2xl">
            {`${country} ${region}`}
          </span>
        </li>

        <li className="flex flex-col m-3 px-6">
          <p className="dark-gray text-xl uppercase">Timezone</p>
          <p className="text-black font-bold text-2xl">{timezone}</p>
        </li>

        <li className="flex flex-col m-3 px-6">
          <p className="dark-gray text-xl uppercase">isp</p>
          <p className="text-black font-bold text-2xl">{isp}</p>
        </li>
        
       
      </ul>
    </div>
  );
}

export default Results;
