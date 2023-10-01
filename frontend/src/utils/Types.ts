export type Usertype={
    _id:string,
    username:string;
    email:string;
    about?:string,
    country?:string,
    image?:string,

};


export type RoomType={
    _id:string,
    name:string,
    collaborators:Usertype[],
    isPublic:boolean,
    user:Usertype,
    createdAt?:string,
    updatedAt?:string,


}

export type FileTye={
    _id:string,
    name:string,
    type:string,
    size:number,
    user:string, 
    room:string,
}