import {styled} from "styled-components"

export const SearchSelectedUseWRapper=styled.div`
    padding:10px;
    border-radius:5px;
    background:#1e1e1e;
    display:flex;
    align-items:center;
    gap:5px;
    width:fit-content;
    img{
        width:20px;
        height:20px;
        border-radius:50%;
        object-fit:cover;
    }
    .selectedUsername{
        font-size:10px;
        letter-spacing:1px;
        color:gray;
    }
    .removeIcon{
        fill:gray;
        font-size:13px;
        cursor:pointer;
    }
`