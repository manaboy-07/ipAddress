/** @format */

import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { fetchIpAddress } from "./utils/fetchIpAddress";
import backImage from '../src/images/pattern-bg-desktop.png'
import Results from "./components/Results";
function App() {
  const [ipValue, setIpValue] = useState("");
  const [isIpAddress, setIsIpAddress] = useState(true)
  const [results, setResults] = useState({
    ip: "8.8.8",
    location:{
      timezone: '12:00',
      country: '',
      region: ''
    },
    isp: '',

  });
  const fetchResults = async () => {
    const regexExp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    
    const IsAIpAddress = regexExp.test(ipValue);
    if(IsAIpAddress){
      const data = await fetchIpAddress(ipValue)
      setResults(data)
    }else{
       setIsIpAddress(false)
    }
   
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (ipValue) {
      fetchResults();
      setIpValue("");
    }
  };

 

  console.log(typeof results);

  console.log(results);

  return (
    <div style={{
      backgroundImage: `url(${backImage})`
    }} className='flex flex-col items-center justify-center  p-3'>
      <div className="" >
      <h2 className='text-white text-2xl text-center'>IP Address Tracker</h2>
      <Search
        ipValue={ipValue}
        setIpValue={setIpValue}
        handleSubmit={handleSubmit}
      />
      </div>
      {!isIpAddress &&  <Error/>}

      <Results results={results}/>
    </div>
  );
}

export default App;
