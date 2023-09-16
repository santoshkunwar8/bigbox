export type Usertype={
    _id:string,
    username:string;
    email:string;
    about?:string,
    country?:string,
    image?:string,

};


export type RoomType={
    name:string,
    collaborators:Usertype[],
    isPublic:boolean,
    user:Usertype
}