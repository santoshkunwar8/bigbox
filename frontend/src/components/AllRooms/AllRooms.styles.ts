import {styled} from "styled-components"

export const AllRoomsWrapper = styled.div`

display:flex;
flex-direction:column;
gap:1rem;
.create_room{
     padding: 0 10px;
  background-color: var(--primary_color);
  height: 35px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.allRoomsWrapper{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    gap:1rem;
}

`