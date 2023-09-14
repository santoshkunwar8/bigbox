import React, { FC } from 'react'
import { SearchSelectedUseWRapper } from './SearchSelectedUser.styles'
import { Usertype } from '../../../utils/Types'
import {AiOutlineClose} from "react-icons/ai"
type searchUserPropsType={
    selectedUser:Usertype,
    handleRemoveSelected:(user:Usertype)=>void,
}
const SearchSelectedUsers:FC<searchUserPropsType> = ({selectedUser,handleRemoveSelected}) => {
  return (
    <SearchSelectedUseWRapper>
        <img src={selectedUser?.image} alt="profile img" />
        <div className="selectedUsername">{selectedUser.username}</div>
        <AiOutlineClose className='removeIcon' onClick={()=>handleRemoveSelected(selectedUser)}/>
    </SearchSelectedUseWRapper>
  )
}

export default SearchSelectedUsers