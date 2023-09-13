import React, { FC } from 'react'
import { SearchSelectedUseWRapper } from './SearchSelectedUser.styles'
import { Usertype } from '../../../utils/Types'
type searchUserPropsType={
    selectedUser:Usertype
}
const SearchSelectedUsers:FC<searchUserPropsType> = ({selectedUser}) => {
  return (
    <SearchSelectedUseWRapper>
        <img src={selectedUser?.image} alt="profile img" />
        <div className="selectedUsername">{selectedUser.username}</div>
    </SearchSelectedUseWRapper>
  )
}

export default SearchSelectedUsers