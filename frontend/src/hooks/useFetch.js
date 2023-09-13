import React from 'react'
import axiosInstance from '../utils/axios'

const useFetch = () => {
  
 const getFetch=async(endpointApi,params,cb)=>{

    try {
        const {status,data} = await endpointApi([...params]);
        if(status===200){
            cb(null,data.message);
        }else{
            throw data.message;
        }
    } catch (error) {
        cb(error.message,null)
    }


 }
 const postFetch=async(endpoint,payload,cb)=>{
    try {
         const {status,data} = await axiosInstance.post(endpoint,payload);
        if(status===200){
            cb(null,data.message);
        }else{
            throw data.message;
        }
    } catch (error) {
        cb(error.message,null)
    }
 }


 return {getFetch,postFetch};
}

export default useFetch