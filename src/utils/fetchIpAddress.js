import axios from "axios";
const API_KEY = 'at_lFtyuXX7M9hhX3JakupC5fUVIiwtE'
// &ipAddress=8.8.8.8
const BASE_FETCH_URL = 'https://geo.ipify.org/api/v2/country?apiKey=at_lFtyuXX7M9hhX3JakupC5fUVIiwtE'

export const fetchIpAddress = async (ipAddress) => {
    try{
        const data = await axios.get(`${BASE_FETCH_URL}` + `&ipAddress=${ipAddress}`)
        return data
    }catch(err){
        console.log(err)
    }
}

//https://geo.ipify.org/api/v2/country?apiKey=at_lFtyuXX7M9hhX3JakupC5fUVIiwtE&ipAddress=8.8.8.8