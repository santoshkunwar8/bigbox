import axios ,{AxiosProgressEvent}from "axios"


const cloudName ="onlinecoder"
const presetKey="sharefile"

interface CallBack{
  (progress:number,url:string):void
}
interface ReturnType{
    url:string,
    status:number
}
const useUploadImage=()=>{


    
   const upload=async(file:File,cb?:CallBack):Promise<ReturnType>=>{


        
        const formData = new FormData()
        formData.append("file",file)
        formData.append("upload_preset",presetKey)
    try {
    const res = await  axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,formData,{
        
        headers:{
            "Content-Type":"multipart/form-data"
        },
        onUploadProgress:(e:AxiosProgressEvent)=>{
            if(e.total){
                let loaded = Math.round((100*e?.loaded)/e.total);
              if(cb)
                cb(loaded,"")

            }
                    
        }
    })
    if(cb){
        cb(100,res?.data?.secure_url)
    }
    return {url:res?.data?.secure_url,status:200};
} catch (error) {
    console.log(error)
    return {url:"",status:500}
}
}   

return {upload};


}
export default useUploadImage;

