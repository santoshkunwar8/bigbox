import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverBody,
    useToast,
} from '@chakra-ui/react'


import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'



import { useNavigate } from 'react-router-dom'
import { actionCreators } from '../../../redux'
import { logoutApi } from '../../../utils/api'
import { SignoutPopoverWrapper } from './SignoutPopover.styles'



const SignOutPopover = ({ children }) => {

    const dispatch = useDispatch();


    const { RemoveUserAction } = bindActionCreators(actionCreators, dispatch)


    const handleLogout = async () => {

        try {
            const res = await logoutApi();
            if (res.status === 200) {
                RemoveUserAction()

             
         
            } else {
                throw Error("something went wrong")
            }
        } catch (error) {
            console.log(error?.message)
        }
    }

    return (
        <Popover closeOnBlur  placement={"right-end"}>
            <PopoverTrigger>
                <span style={{ cursor: "pointer" }}>{children}</span>
            </PopoverTrigger>
            <PopoverContent width={"130px"}>
                <PopoverArrow />
                <SignoutPopoverWrapper>
                    <PopoverBody onClick={handleLogout} className={"popover_body"}>
                        <img src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/null/external-online-account-logout-with-arrow-direction-mark-login-tritone-tal-revivo.png" alt='signout_img' />
                        <span className='sign_out_text'>Sign Out</span>
                    </PopoverBody>
                </SignoutPopoverWrapper>
            </PopoverContent>
        </Popover>
    )
}

export default SignOutPopover