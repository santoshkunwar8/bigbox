import React from 'react'
import cloudinarySetup from '../utils/setup';
type ReturnType = {
    url:string,
    success:boolean
}
const useMediaUpload = () => {

    const upload=async(fileString:any,mediaType:string):Promise<ReturnType>=>{
   try {
    
       if(mediaType==="image"){
        console.log("image",fileString)
           const uploadResponse = await cloudinarySetup.uploader.upload(fileString, {
               upload_preset: "wrapfileImg",
            });
            console.log("inside",uploadResponse)
            return {url:uploadResponse.secure_url,success:true}
            
            
        }else if(mediaType==="video") {
            const uploadResponse = await cloudinarySetup.uploader.upload(fileString, {
                upload_preset: "wrapfileVideo",
                resource_type:"video"
            });
            return {url:uploadResponse.secure_url,success:true}
            
        }
    } catch (error) {
        return {url:"",success:false}
    }
        
    }

    return {upload}

}

export default useMediaUpload