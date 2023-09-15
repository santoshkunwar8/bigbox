import  {styled} from "styled-components"


export const CreateRoomModalWrapper = styled.div`

background:#151515;
min-height:300px;
padding:2rem;
display:flex;
flex-direction:column;
align-items:center;
gap:2rem;
.createRoomHeader{
    display:flex;
    justify-content:center;
}
form{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
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

.selectedWrapper{
    display:flex;
    flex-wrap:wrap;
    margin:1rem 0;
}
.headerText{
    font-weight:bold;
    font-size:1.6rem;
    letter-spacing:1px;
    color:var(--primary_color);

}

input{
    margin-bottom:1rem;
    border-radius:8px;
    width:100%;
    height:50px;
    background:#1f1f1f;
    padding:0 1rem;
    font-size:12px;
    outline:none;
    &::placeholder{
        color:gray;
        letter-spacing:1px;
        font-size:12px;
    }
    
    
}
button{
    font-size:15px;
    letter-spacing:1px;
    width:180px;
    margin:auto;
    background:var(--primary_color);
}

`