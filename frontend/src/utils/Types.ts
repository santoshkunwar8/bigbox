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
    user:Usertype
}