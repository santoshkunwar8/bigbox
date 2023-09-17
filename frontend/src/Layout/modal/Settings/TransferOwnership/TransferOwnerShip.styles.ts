import {styled} from "styled-components"

export const TransferOwnershipWrapper = styled.div`

background:#151515;
padding:1rem;
display:flex;
flex-direction:column;
gap:10px;
align-items:center;
.searchCollaborator{
    background:transparent;
    border:1px solid rgba(128, 128, 128, 0.374);
    height:45px;
    border-radius:3px;
    width:100%;
    padding:0 10px;
    letter-spacing:1px;
    color:gray;
    font-size:12px;
    outline:none;
    &::placeholder{
        letter-spacing:1px;
        color:rgba(128, 128, 128, 0.374);
        font-size:12px;

    }
}
.transferOwnershipHeader {
  h1{

      font-size:1.3rem;
      font-weight:600;

  } 
}
.collaboratorList{
    width:100%;
}
`