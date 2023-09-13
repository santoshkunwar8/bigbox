import axiosInstance from "./axios";

type roomPayloadType={
    user:string,
    collaborators:string[],
}
export const createRoomApi=(data:roomPayloadType)=>axiosInstance.post("/room/create",data)
export const getUserRoomApi =(userId:string)=>axiosInstance.get(`/room?user=${userId}`);

export const searchUserByNameApi=((search:string)=>axiosInstance.get(`/user?search_query=${search}`))
export const searchUserByIdApi = ((userId:string)=>axiosInstance.get(`/user?userId=${userId}`))




