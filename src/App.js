/** @format */

import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { fetchIpAddress } from "./utils/fetchIpAddress";
import Results from "./components/Results";
function App() {
  const [ipValue, setIpValue] = useState("");
  const [results, setResults] = useState({});
  const fetchResults = async () => {
    const data = await fetchIpAddress(ipValue);
    setResults(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResults()
    if (ipValue) {
      setIpValue("");
    }
  };
  
  // useEffect(() => {
    
  //   fetchResults();
  // }, []);
  console.log(ipValue);
  console.log(typeof results);
  console.log(results);
  console.log(results.ip);

  return (
    <div className='flex items-center justify-center m-3 p-3'>
      <h2 className='text-white text-2xl'>IP Address Tracker</h2>
      <Search ipValue={ipValue} setIpValue={setIpValue} handleSubmit={handleSubmit}/>
      {/* <Results results={results}/> */}
    </div>
  );
}

export default App;
