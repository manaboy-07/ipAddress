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
      
      <ul className='list-none result-lists flex justify-center items-center mx-3 flex-col md:flex-row md:justify-between'>

        <li className="flex flex-col m-3 px-6 mt-4 md:mt-0">
          <p className="dark-gray text-xl uppercase text-center my-2 md:text-start">IP address</p>
          <p className="text-black font-bold text-2xl">{ip}</p>
        </li>

        <li className="flex flex-col m-3 px-6  mt-4 md:mt-0">
          <p className="dark-gray text-xl uppercase my-2 text-center md:text-start">Locations</p>
          <span className="text-black font-bold text-2xl">
            {`${country} ${region}`}
          </span>
        </li>

        <li className="flex flex-col m-3 px-6  mt-4 md:mt-0">
          <p className="dark-gray text-xl my-2 uppercase text-center md:text-starte">Timezone</p>
          <p className="text-black font-bold text-2xl">{timezone}</p>
        </li>

        <li className="flex flex-col m-3 px-6  mt-4 md:mt-0">
          <p className="dark-gray text-xl uppercase my-2 text-center md:text-start">isp</p>
          <p className="text-black font-bold text-2xl">{isp}</p>
        </li>
        
       
      </ul>
    </div>
  );
}

export default Results;
