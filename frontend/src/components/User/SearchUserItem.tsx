import React from 'react'
import { SearchUserItemWrapper } from './SearchUserItem.module'
import { Usertype } from '../../utils/Types'

type SearchUserItemPropsType={
  handleClick:(Usertype)=>void ,
  user:Usertype,
}
  ;


const SearchUserItem:React.FC<SearchUserItemPropsType> = ({handleClick ,user}) => {
  return (
    <SearchUserItemWrapper onClick={()=>handleClick(user)}>
        <img  width={"40px"} height={"40px"} src={ user.image} alt="" />
        <div className="userInfo">
            <h5 className='username'> {user.username}</h5>
            <p className='email'> {user.email}</p>
        </div>
        

    </SearchUserItemWrapper>
  )
}

export default SearchUserItem