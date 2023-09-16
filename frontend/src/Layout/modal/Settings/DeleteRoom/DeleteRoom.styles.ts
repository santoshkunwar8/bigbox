import {styled} from "styled-components"

export const DeleteRoomModalWrapper = styled.div`

background:#151515;
padding:2rem;
display:flex;
flex-direction:column;
gap:2rem;
letter-spacing:0.8px;
width:550px;
.headerText{
    text-align:center;
    font-size:1rem;
  
    font-weight:bold;
}
button{
    height:45px;
    width:100%;
    background:var(--primary_color);
  font-size:18px;
  text-transform:uppercase;
}
`