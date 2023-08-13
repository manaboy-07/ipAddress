
import { useState } from 'react';
import './App.css';
import Search from './components/Search';

function App() {
  const [ipValue, setIpValue] = useState('')
  return (
    <div className="flex items-center justify-center m-3 p-3">
      <h2 className="text-white text-2xl">IP Address Tracker</h2>
      <Search ipValue={ipValue} setIpValue={setIpValue}/>
    </div>
  );
}

export default App;
