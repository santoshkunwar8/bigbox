import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"https://bigbox-rcg6.onrender.com/api",
    withCredentials:true,
})

export default axiosInstance;