import axiosInstance from "./axios";

type roomPayloadType={
    user:string,
    collaborators:string[],
}
type FileUploadPayload={
    user:string,
    room:string,
    url:string,
    type:string,
    name:string,
    size:number,
}
// room endpoints 
export const createRoomApi=(data:roomPayloadType)=>axiosInstance.post("/room/create",data)
export const getUserRoomApi =(userId:string)=>axiosInstance.get(`/room?user=${userId}`);
export const getRoomByIdApi=(roomId:string)=>axiosInstance.get(`/room?_id=${roomId}`)
export const addUserAsCollaboratorApi=(roomId:string,user:string)=>axiosInstance.post(`/room/invite/${roomId}`,{user})
export const updateRoomApi = (roomId:string,data:any)=>axiosInstance.put(`/room/${roomId}`,data)
export const deleteRoomApi=(roomId:string)=>axiosInstance.delete(`/room/${roomId}`)

// user endpoints
export const searchUserByNameApi=((search:string)=>axiosInstance.get(`/user?search_query=${search}`))
export const searchUserByIdApi = ((userId:string)=>axiosInstance.get(`/user?userId=${userId}`))




// file endpoints


export const getFilebyRoomId=(roomId:string)=>axiosInstance.get(`/file?room=${roomId}`)
export const addFileApi=(data:FileUploadPayload)=>axiosInstance.post(`/file/create`,data)
