import {
    Popover,
    PopoverTrigger,
    PopoverContent,

  } from '@chakra-ui/react'
  import React from 'react'

import { SearchUserPopoverWrapper } from './SearachUserPopover.styles'
import SearchUserItem from '../../../components/User/SearchUserItem'
import { Usertype } from '../../../utils/Types'

  
type SearchUserPopoverPropsType={
    children:React.ReactNode,
    handleSelectCollab:(Usertype)=>void;
  searchedUsers:Usertype[]
}
  const SearachUserPopover:React.FC<SearchUserPopoverPropsType> = ({children ,handleSelectCollab ,searchedUsers}) => {



  

  return (
    <>
    <Popover autoFocus={false} isOpen={true}>
    <PopoverTrigger>
        {children}
    </PopoverTrigger>
  
    <PopoverContent border={"none"} borderRadius={"10px"}>
     
   
     
      <SearchUserPopoverWrapper>
        <div className="searchUserContainer">
          {
            searchedUsers.map(user=><SearchUserItem key={user._id } handleClick={handleSelectCollab} user={user}/> )
          }

           

          
        </div>
      </SearchUserPopoverWrapper>
    </PopoverContent>
  </Popover>
    </>
  )
}

export default SearachUserPopover