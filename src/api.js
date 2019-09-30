import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "7b215692e27f768ce340b89564e74c72",
        language: "en-US"
    }
})

api.get("tv/popular")

export default api