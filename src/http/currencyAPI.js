import axios from "axios"

const API_KEY ='e8823da675-ee6a0e9bec-r7325m'
const BASE_URL = 'https://api.fastforex.io/fetch-multi?from=UAH&to=USD%2CEUR%2CGBP%2CCHF%20UAH&api_key='
const url = `${BASE_URL}${API_KEY}`

export const fetchData = async () => {
    const data = await axios.get(url).then(res => res.data.results)
    return data
}