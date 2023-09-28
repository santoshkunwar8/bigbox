import {useToast} from "@chakra-ui/react"
const useAlert=()=>{
   const toast = useToast()
    const alert=(type:"error"|"success",message:string)=>{
        toast({
            description:message,
            status:type,
            duration:2000,
            position:"top"
        })
    }
    return {alert}


}
export default useAlert;