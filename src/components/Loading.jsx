/** @format */

import React from "react";

function Loading() {
  return (
    <div className='overlay'>
      <div className='my-modal flex flex-col justify-center items-center'>
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
        <h2 className="text-white text-center">Fetching details please wait...</h2>
      </div>
    </div>
  );
}

export default Loading;
