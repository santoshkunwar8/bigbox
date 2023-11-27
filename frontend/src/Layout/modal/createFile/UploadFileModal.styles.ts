import {styled} from "styled-components";

export const UploadFileModalWrapper = styled.div`
width:100%;
background:#151515;
min-height:200px;
padding:1rem;
display:flex;
flex-direction:column;
align-items:center;
gap:1.4rem;
border-radius:5px;

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
        color:var(--primary_color);
        letter-spacing:1px;
        font-weight:600;
        text-transform:uppercase;
    }
}

.imageWrapper{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    gap:7px;

   
}
.progressBox{
    width:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    iframe{
        width: 100px;
        height: 100px;
    }
    
    p{
        color:var(--primary_color);
        margin-bottom:5px;
        font-size: 12px;
        letter-spacing:0.8px;


    }
    .progressBar{
        width:100%;
        height:7px;
        border-radius:8px;
        background:gray;
        overflow:hidden;
        .progress{
            background:var(--primary_color);
            height:100%;
            width:25%;
        }
    }
}
.supportedText {
    color:gray;
    font-size:12px;
    letter-spacing:1px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    p{
        color: gray;
    }
}
.buttonWrapper{
    width:100%;
    display:flex;
   
    gap:1rem;

}
.browseButton{
    flex:1;
    width:100%;
    height:40px;
    background:#1e1e1e;
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid var(--primary_color);
    border-radius:3px;
    cursor:pointer;
    
    
    p{
        font-size:15px;
        letter-spacing:1px;
        color:var(--primary_color);
    }
}
.uploadFile{
    background:var(--primary_color);
    opacity:0.8;
    pointer-events:none;
    p{
        
        color:white !important;
    }
}
.enable{
    pointer-events:auto;
    opacity:1;
}

`