import React from 'react'
import { CollaboratorItemWrapper } from './CollaboratorItem.styles';
import { removeCollaboratorApi } from '../../utils/api';
import { useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux';
import { useDispatch } from 'react-redux';

const CollaboratorItem = ({user}) => {

    const {id} = useParams();
    const dispatch = useDispatch()
    const {RefreshAction} = bindActionCreators(actionCreators,dispatch )

    const handleRemoveCollaborator=async()=>{

        if(!id)return;
        try {
          const {status,data}=   await removeCollaboratorApi(id,user._id)
          if(status===200){
            RefreshAction()
            alert("successfully removed")
          }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    
                        <CollaboratorItemWrapper  key={user._id} className={"access_time_box_item"}>
                            <div className={"collaborator_main_info_box"}>


                                <img className={"collaborator_img"} src={user.image} />
                                <div className={"collaborator_details"}>
                                    <p className={"collaborator_name"}>{user.username}</p>
                                    <span className={"collaborator_email"}>{user.email}</span>
                                </div>
                            </div>
          
                            <div className={"remove_collaborator"}>
                                <button className={"remove_collaborator_btn"} onClick={handleRemoveCollaborator}>
                                    Remove
                                </button>
                            </div>

                        </CollaboratorItemWrapper>
  )
}

export default CollaboratorItem;
