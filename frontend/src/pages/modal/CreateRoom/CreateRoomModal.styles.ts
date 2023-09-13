import  {styled} from "styled-components"


export const CreateRoomModalWrapper = styled.div`

background:#151515;
min-height:300px;
padding:2rem;
display:flex;
flex-direction:column;
gap:2rem;
.createRoomHeader{
    
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
    &::placeholder{
        color:gray;
        letter-spacing:1px;
        font-size:14px;
    }
    
    
}
button{
    font-size:15px;
    letter-spacing:1px;
    width:120px;
    background:var(--primary_color);
}

`