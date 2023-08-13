
import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search';
import { fetchIpAddress } from './utils/fetchIpAddress';
function App() {
  const [ipValue, setIpValue] = useState('')
  const [results, setResults] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(ipValue){
        console.log(`Your IP address is ${ipValue}`)
        useEffect(() => {
          fetchIpAddress(ipValue).then(data => console.log(data))
        }, [ipValue])
        
    }else{
        alert('No IP address is inputed')
    }
}
  
  
  return (
    <div className="flex items-center justify-center m-3 p-3">
      <h2 className="text-white text-2xl">IP Address Tracker</h2>
      <Search ipValue={ipValue} setIpValue={setIpValue} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
