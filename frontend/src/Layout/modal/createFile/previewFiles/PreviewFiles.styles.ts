import  {styled} from "styled-components"

export const PreviewFilesWrapper=styled.div`


        width:100px;
        height:100px;
        border-radius:5px;
        overflow:hidden;
        position:relative;
        .delBtn{
            position:absolute;
            top:5px;
            right:5px;
            .closeButton{
                color:red !important;
                fill:red !important;
                font-size: 1.3rem;
            }
        }
        img,video,iframe{
            width:100%;
            height:100%;
            object-fit:cover;
        }
       
    


`