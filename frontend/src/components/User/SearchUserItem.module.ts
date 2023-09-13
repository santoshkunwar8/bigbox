import {styled} from "styled-components"

export const SearchUserItemWrapper=styled.div`

display:flex;
align-items:center;
gap:1rem;
cursor:pointer;
padding:1rem  ;
&:hover{
    background:#151515;
}
img{
    width:40px;
    height:40px;
    border-radius:50%;
    object-fit:cover;
}
.email{
    letter-spacing:1px;
    font-size:10px;
    color:gray;
}

`