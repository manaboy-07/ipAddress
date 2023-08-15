/** @format */

import { useEffect, useState, useRef } from "react";
import "./App.css";
import Search from "./components/Search";
import { fetchIpAddress } from "./utils/fetchIpAddress";
import backImage from "../src/images/pattern-bg-desktop.png";
import Results from "./components/Results";
import Error from "./components/Error";
import Loading from "./components/Loading";
import Maps from "./components/Maps";

const NOMATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
// const params = {
//     q: "",
//     format: "json",
//     addressdetails: "addressdetails",
//   };
function App() {
  const [loading, setLoading] = useState(false);
  const [ipValue, setIpValue] = useState("");

  const [isIpAddress, setIsIpAddress] = useState(true);
  const [listPlace, setListPlace] = useState([]);
  const [lon, setLon] = useState(-0.09);
  const [lat, setLat] = useState(51.505);
  const [position, setPosition] = useState([+lat,+lon ]);
  // const position = [lat, lon]
  const [results, setResults] = useState({
    ip: "",
    location: {
      timezone: "",
      country: "",
      region: "",
    },
    isp: "",
  });
 
  const fetchResults = async () => {
    const regexExp =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;

    const IsAIpAddress = regexExp.test(ipValue);
    if (IsAIpAddress) {
      setLoading(true);
      const data = await fetchIpAddress(ipValue);
      setResults(data);
      setLoading(false);

      const params = {
        q: data?.location?.country,
        format: "json",
        addressdetails: 1,
        polygon_geojson: 0,
      };

      const queryString = new URLSearchParams(params).toString();

      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      fetch(`${NOMATIM_BASE_URL}${queryString}`, requestOptions)
        .then((res) => res.text())
        .then((result) => {
          
          setListPlace(prevState => JSON.parse(result)[0]);
          setLat(prevState => JSON.parse(result)[0]?.lat);
          setLon(prevState => JSON.parse(result)[0]?.lon);
         

         
          
        })
        .catch((err) => console.log(err));
    } else {
      setIsIpAddress(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (ipValue) {
      fetchResults();
      setIpValue("");
    }
    
  };

  useEffect(() => {
    setPosition(prevState => [+lat, +lon])
  },[lat, lon])
 
 
  

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backImage})`,
        }}
        className='flex flex-col items-center justify-center  p-3'>
        <div className=''>
          <h2 className='text-white text-2xl text-center'>
            IP Address Tracker
          </h2>
          <Search
            ipValue={ipValue}
            setIpValue={setIpValue}
            handleSubmit={handleSubmit}
          />
        </div>
        {!isIpAddress && <Error setIsIpAddress={setIsIpAddress} />}
        {loading && <Loading />}

        <Results results={results} />
      </div>
      <div>
        <Maps searchText={results.location.country} position={position}/>
      </div>
    </>
  );
}

export default App;
