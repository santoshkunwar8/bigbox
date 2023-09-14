import {styled} from "styled-components";

export const UploadFileModalWrapper = styled.div`
width:100%;
background:#151515;
min-height:200px;
padding:2rem;
display:flex;
flex-direction:column;
align-items:center;
gap:2rem;

.uploadFileHeader{
    display:flex;
    gap:10px;
    align-items:center;
    img{
        width:40px;
        height:40px;
    }
    h1{
        font-size:1.7rem;
        letter-spacing:1px;
        font-weight:600;
    }
}
.imageWrapper{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    gap:7px;

   
}
.browseButton{
    width:100%;
    height:60px;
    background:#1e1e1e;
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid var(--primary_color);
    border-radius:6px;
    
    
    p{
        font-size:17px;
        letter-spacing:1px;
        color:var(--primary_color);
    }
}

`