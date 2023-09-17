import {styled} from "styled-components"

export const CollaboratorItemWrapper= styled.div`



    display: flex;
    gap: 1rem;
    align-items: center;
 
    height: 60px;
    align-items: flex-end;
    border-bottom: 0.4px solid rgba(128, 128, 128, 0.374);
    padding: 15px 0;
   p, span {
      color: gray;
      font-size: 10px 
    }

    .collaborator_main_info_box{
        display: flex;
        gap: 10px;
        align-items: flex-end;
        flex: 1;
        .collaborator_img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          object-fit: cover;
        }
        .collaborator_details {
          display: flex;
          flex-direction: column;
          gap: 0px;
          .collaborator_name {
            font-size: 12px !important;
            font-weight: 600;
            color: var(--primary_color) !important;
            letter-spacing: 1px;
        }
        .collaborator_email {
          font-size: 8px;
          color: gray;
          letter-spacing: 1.2px;
        }
        }
    }





.remove_collaborator_btn {
  height: 28px;
  border: 1px solid rgba(255, 0, 0, 0.596);
  color: rgba(255, 0, 0, 0.514);
  padding: 0 10px;
  font-size: 9px;
  margin-left: 2rem;
}



`