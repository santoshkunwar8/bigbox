import {styled} from "styled-components"


export const ChangeVisibilityWrapper = styled.div`

background:#151515;
display:flex;
flex-direction:column;
align-items:center;
padding:2rem;
gap:2rem;

.headerText{
    color:white;
    font-weight:600;
    font-size:1.1rem;
    letter-spacing:1px;
    color:var(--primary_color);


}

.accessBox{
    display:flex;
    width:100%;
    justify-content:center;
    gap:1rem;
    .accessItem{
        width:160px;
        height:80px;
        border-radius:8px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        background:#1e1e1e;
        transition:all .3s ease;
        p{
            color:gray;
            letter-spacing:1px;
            font-size:13px;
        }
    }
    .activeItem{
        border:2px solid var(--primary_color);
        p{
            color:var(--primary_color)
        }
    }
}


`