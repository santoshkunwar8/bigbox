import  {styled} from "styled-components"

export const PreviewFilesWrapper=styled.div`


        width:80px;
        height:80px;
        border-radius:5px;
        overflow:hidden;
        position:relative;
        .delBtn{
            position:absolute;
            top:5px;
            right:5px;
            svg{
                color:red;
                fill:red;
            }
        }
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    


`